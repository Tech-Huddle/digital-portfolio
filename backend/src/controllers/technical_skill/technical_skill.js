const EV = require('../../enviroment');
const logger = require('../../logger/logger');
const { getName } = require('../../logger/logFunctionName');
const { validateParamstechnical_skillCreate, formatResponsetechnical_skillCreate, validateParamstechnical_skillList, formatResponsetechnical_skillList, validateParamstechnical_skillUpdate, formatResponsetechnical_skillUpdate, validateParamstechnical_skillDelete, formatResponsetechnical_skillDelete } = require('../../helpers/technical_skill/technical_skillHelper');

const { technical_skillCreate, technical_skillList, technical_skillUpdate, technical_skillDelete } = require('../../models/queryModels/technical_skill/technical_skill');

exports.createtechnical_skill = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let data = req.body;
        let validDatas = validateParamstechnical_skillCreate(data);
        if (validDatas.success) {
            result = await technical_skillCreate(validDatas, next)
            res.send({ "message": "success", "data": formatResponsetechnical_skillCreate(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}

exports.listtechnical_skill = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let data = req;
        let validDatas = await validateParamstechnical_skillList(data, next);
        if (validDatas.success) {
            result = await technical_skillList(validDatas, next)
            res.send({ "message": "success", "data": formatResponsetechnical_skillList(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}

exports.updatetechnical_skill = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let validDatas = validateParamstechnical_skillUpdate(req);
        if (validDatas.success) {
            result = await technical_skillUpdate(validDatas, next)
            res.send({ "message": "success", "data": formatResponsetechnical_skillUpdate(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}

exports.deletetechnical_skill = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let validDatas = validateParamstechnical_skillDelete(req);
        if (validDatas.success) {
            result = await technical_skillDelete(validDatas, next)
            res.send({ "message": "success", "data": formatResponsetechnical_skillDelete(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}