const EV = require('../../enviroment');
const logger = require('../../logger/logger');
const { getName } = require('../../logger/logFunctionName');
const { validateParamsExperienceCreate, formatResponseExperienceCreate, validateParamsExperienceList, formatResponseExperienceList, validateParamsExperienceUpdate, formatResponseExperienceUpdate, validateParamsExperienceDelete, formatResponseExperienceDelete } = require('../../helpers/experience/experienceHelper');

const { experienceCreate, experienceList, experienceUpdate, experienceDelete } = require('../../models/queryModels/experience/experienceModel');

exports.createExperience = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let data = req.body;
        let validDatas = validateParamsExperienceCreate(data);
        if (validDatas.success) {
            result = await experienceCreate(validDatas, next)
            res.send({ "message": "success", "data": formatResponseExperienceCreate(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}

exports.listExperience = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let data = req;
        let validDatas = await validateParamsExperienceList(data, next);
        if (validDatas.success) {
            result = await experienceList(validDatas, next)
            res.send({ "message": "success", "data": formatResponseExperienceList(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}

exports.updateExperience = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let validDatas = validateParamsExperienceUpdate(req);
        if (validDatas.success) {
            result = await experienceUpdate(validDatas, next)
            res.send({ "message": "success", "data": formatResponseExperienceUpdate(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}

exports.deleteExperience = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let validDatas = validateParamsExperienceDelete(req);
        if (validDatas.success) {
            result = await experienceDelete(validDatas, next)
            res.send({ "message": "success", "data": formatResponseExperienceDelete(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}