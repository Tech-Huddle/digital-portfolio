const EV = require('../../enviroment');
const logger = require('../../logger/logger');
const { getName } = require('../../logger/logFunctionName');
const { validateParamsBasicDetailsCreate, formatResponseBasicDetailsCreate, validateParamsBasicDetailsList, formatResponseBasicDetailsList, validateParamsBasicDetailsUpdate, formatResponseBasicDetailsUpdate, validateParamsBasicDetailsDelete, formatResponseBasicDetailsDelete } = require('../../helpers/basicDetails/basicDetailsHelper')
const { BasicDetailsCreate, BasicDetailsList, BasicDetailsUpdate,BasicDetailsDelete } = require('../../models/queryModels/basicDetails/basicDetailsModel');

exports.createBasicDetails = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let data = req.body;
        let validDatas = validateParamsBasicDetailsCreate(data);
        if (validDatas.success) {
            result = await BasicDetailsCreate(validDatas, next)
            res.send({ "message": "success", "data": formatResponseBasicDetailsCreate(result) });
        } else {
            next({ "message": validDatas.message,"status": validDatas.status});
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}

exports.listBasicDetails = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let data = req;
        let validDatas = await validateParamsBasicDetailsList(data, next);
        if (validDatas.success) {
            result = await BasicDetailsList(validDatas, next)
            res.send({ "message": "success", "data": formatResponseBasicDetailsList(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}

exports.updateBasicDetails = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let validDatas = validateParamsBasicDetailsUpdate(req);
        if (validDatas.success) {
            result = await BasicDetailsUpdate(validDatas, next)
            res.send({ "message": "success", "data": formatResponseBasicDetailsUpdate(result) });
        } else {
            next({ "message": validDatas.message,"status": validDatas.status });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}

exports.deleteBasicDetails = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let validDatas = validateParamsBasicDetailsDelete(req,next);
        if (validDatas.success) {
            result = await BasicDetailsDelete(validDatas, next)
            res.send({ "message": "success", "data": formatResponseBasicDetailsDelete(result) });
        } else {
            next({ "message": validDatas.message,"status": validDatas.status });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}