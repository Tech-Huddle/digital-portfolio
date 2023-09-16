const EV = require('../../enviroment');
const logger = require('../../logger/logger');
const { getName } = require('../../logger/logFunctionName');
const { validateParamscertificationCreate, formatResponsecertificationCreate, validateParamscertificationList, formatResponsecertificationList, validateParamscertificationUpdate, formatResponsecertificationUpdate, validateParamscertificationDelete, formatResponsecertificationDelete } = require('../../helpers/certification/certificationHelper');

const { certificationCreate, certificationList, certificationUpdate, certificationDelete } = require('../../models/queryModels/certification/certification');

exports.createcertification = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let data = req.body;
        let validDatas = validateParamscertificationCreate(data);
        if (validDatas.success) {
            result = await certificationCreate(validDatas, next)
            res.send({ "message": "success", "data": formatResponsecertificationCreate(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}

exports.listcertification = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let data = req;
        let validDatas = await validateParamscertificationList(data, next);
        if (validDatas.success) {
            result = await certificationList(validDatas, next)
            res.send({ "message": "success", "data": formatResponsecertificationList(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}

exports.updatecertification = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let validDatas = validateParamscertificationUpdate(req);
        if (validDatas.success) {
            result = await certificationUpdate(validDatas, next)
            res.send({ "message": "success", "data": formatResponsecertificationUpdate(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}

exports.deletecertification = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let validDatas = validateParamscertificationDelete(req);
        if (validDatas.success) {
            result = await certificationDelete(validDatas, next)
            if(result.success){
                res.send({ "message": "success", "data": formatResponsecertificationDelete(result) });
            }else{
                next({ "message": result.message ,"status":result.status});
            }
            
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}