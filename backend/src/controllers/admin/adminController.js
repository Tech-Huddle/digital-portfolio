const EV = require('../../enviroment');
const logger = require('../../logger/logger');
const { getName } = require('../../logger/logFunctionName');
const {login}=require('../../models/queryModels/admin/adminModel')

exports.login = async(req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let data = req.body;
      
        let result=await login(req.body);
        console.log("===>>",result);
        res.send(result)

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal_Server_Error" });
    }
}