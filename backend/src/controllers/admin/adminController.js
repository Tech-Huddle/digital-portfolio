const EV = require('../../enviroment');
const logger = require('../../logger/logger');
const { getName } = require('../../logger/logFunctionName');
const { login } = require('../../models/queryModels/admin/adminModel');
const { validateParamsLogin } = require('../../helpers/admin/adminHelper');

exports.login = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let data = req.body;
        let validDatas = validateParamsLogin(data, next);
        if (validDatas.success) {
            let result = await login(req.body);
            res.send(result);
        } else {
            next({ "message": validDatas.message, "status": validDatas.status });
        }
    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}