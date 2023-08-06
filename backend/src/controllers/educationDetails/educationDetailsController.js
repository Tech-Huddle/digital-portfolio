const EV = require('../../enviroment');
const logger = require('../../logger/logger');
const { getName } = require('../../logger/logFunctionName');
const { validateParamsEducationDetailsCreate, formatResponseEducationDetailsCreate, validateParamsEducationDetailsList, formatResponseEducationDetailsList, validateParamsEducationDetailsUpdate, formatResponseEducationDetailsUpdate, validateParamsEducationDetailsDelete, formatResponseEducationDetailsDelete } = require('../../helpers/educationDetails/educationDetailsHelper');

const { educationDetailsCreate, educationDetailsList, educationDetailsUpdate, educationDetailsDelete } = require('../../models/queryModels/educationDetails/educationDetailsModel');

exports.createEducationDetails = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let data = req.body;
        let validDatas = validateParamsEducationDetailsCreate(data);
        if (validDatas.success) {
            result = await educationDetailsCreate(validDatas, next)
            res.send({ "message": "success", "data": formatResponseEducationDetailsCreate(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}

exports.listEducationDetails = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let data = req;
        let validDatas = await validateParamsEducationDetailsList(data, next);
        if (validDatas.success) {
            result = await educationDetailsList(validDatas, next)
            res.send({ "message": "success", "data": formatResponseEducationDetailsList(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}

exports.updateEducationDetails = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let validDatas = validateParamsEducationDetailsUpdate(req);
        if (validDatas.success) {
            result = await educationDetailsUpdate(validDatas, next)
            res.send({ "message": "success", "data": formatResponseEducationDetailsUpdate(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}

exports.deleteEducationDetails = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let validDatas = validateParamsEducationDetailsDelete(req);
        if (validDatas.success) {
            result = await educationDetailsDelete(validDatas, next)
            res.send({ "message": "success", "data": formatResponseEducationDetailsDelete(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}