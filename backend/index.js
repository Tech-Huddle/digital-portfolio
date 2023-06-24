const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const logger = require('./src/logger/logger');
const sequelize = require('./database/connection');
const EV = require('./src/enviroment');
const router = require('./src/routers');
const { ENDPOINT_NOT_FOUND_ERR } = require('./src/middlewares/errors/errors');
const { errorHandler } = require('./src/middlewares/errors/errorMiddleware');
const device = require('express-device');
const db = require('./database/connection')
const PORT = EV.PORT || 6700;

const app = express();

const corsOpts = {
    origin: '*',
    methods: [
        'GET',
        'POST',
        'PATCH',
        'PUT',
        'DELETE',
        'OPTIONS'
    ],
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'language',
        'X-Amz-Date',
        'X-Api-Key',
        'X-Amz-Security-Token',
        'X-Amz-User-Agent',
        'Session',
        'Accesstoken'
    ]
};

//app.use(cors(corsOpts));
app.options('*', cors());
app.use(device.capture());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));

logger.stream = {
    write: (message, encoding) => {
        logger.http(message);
    }
}

app.use(require("morgan")("combined", { "stream": logger.stream }));

app.use('/api/v1', router);

//status check

app.get("/healthcheck", async (req, res) => {
    let result = await sequelize.query('SELECT 1+1')
    res.send({
        "project_name":EV.PROJECT_NAME,
        "db_status": result != null ? "connected" : "not connected"
    })
})

//If api end point not found
app.use('*', (req, res, next) => {
    const error = {
        status: 404,
        message: ENDPOINT_NOT_FOUND_ERR
    };
    next(error);
});


// global error handling middleware
app.use(errorHandler);



main = async () => {
    try {
        await sequelize
            .authenticate()
            .then(() => {
                logger.info('Connection has been established successfully');
                if (EV.NODE_ENV === 'development') {
                    app.listen(PORT, () => {
                        logger.info("Server up and running on port: %d", PORT);
                    });
                }
            })
            .catch(err => {
                logger.error("Unable to connect to the database: %s", err.message || JSON.stringify(err));
            })
    } catch (err) {
        logger.error("Error to start the server: %s", err.message || JSON.stringify(err));
        process.exit(1);
    }
};

main()


