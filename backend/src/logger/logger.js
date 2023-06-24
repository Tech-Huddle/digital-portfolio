const winston = require('winston');
const { format } = winston;
const EV = require('../enviroment');

const logFormat = format.printf(({ level, message, timestamp, metadata = null }) => {
    let msg = `${timestamp} [${level}] : ${message} `
    if (metadata) {
        msg += JSON.stringify(metadata)
    }
    return msg
});

let customLevels = {};


let loggerSettings = {
    format: format.combine(
        format.colorize({ all: true }),
        format.splat(),
        format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
        logFormat
    ),
    transports: [
        new winston.transports.Console(),
        //new winston.transports.File({filename:'combined.log'})
    ]
}

if (EV.NODE_ENV === 'production') {
    loggerSettings["level"]='error'
    /*customLevels = {
        levels: {
            error: 0,
            http: 1,
            debug: 2,
            info: 3
        },
        colors: {
            error: 'red',
            http: 'magenta',
            debug: 'yellow',
            info: 'green'
        }
    };
    loggerSettings["levels"]= customLevels.levels,
    winston.addColors(customLevels.colors);*/
}
if (EV.NODE_ENV === 'development') {
    customLevels = {
        levels: {
            error: 0,
            http: 1,
            debug: 2,
            info: 3
        },
        colors: {
            error: 'red',
            http: 'magenta',
            debug: 'yellow',
            info: 'green'
        }
    };
    loggerSettings["levels"]= customLevels.levels,
    winston.addColors(customLevels.colors);
}


const logger = winston.createLogger(loggerSettings);
module.exports = logger;