const EV = require('../../enviroment');
const logger = require('../../logger/logger');
const { getName } = require('../../logger/logFunctionName');
const { validateParamsUserCreate, formatResponseUserCreate, validateParamsUserList, formatResponseUserList, validateParamsUserUpdate, formatResponseUserUpdate, validateParamsUserDelete, formatResponseUserDelete } = require('../../helpers/users/userHelper')
const { userCreate, usersList, userUpdate,userDelete } = require('../../models/queryModels/users/userModel');

exports.createUser = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let data = req.body;
        let validDatas = validateParamsUserCreate(data);
        if (validDatas.success) {
            result = await userCreate(validDatas, next)
            res.send({ "message": "success", "data": formatResponseUserCreate(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal_Server_Error" });
    }
}

exports.listUser = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let data = req;
        let validDatas = await validateParamsUserList(data, next);
        if (validDatas.success) {
            result = await usersList(validDatas, next)
            res.send({ "message": "success", "data": formatResponseUserList(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal_Server_Error" });
    }
}

exports.updateUser = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let validDatas = validateParamsUserUpdate(req);
        if (validDatas.success) {
            result = await userUpdate(validDatas, next)
            res.send({ "message": "success", "data": formatResponseUserUpdate(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal_Server_Error" });
    }
}

exports.deleteUser = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let validDatas = validateParamsUserDelete(req);
        if (validDatas.success) {
            result = await userDelete(validDatas, next)
            res.send({ "message": "success", "data": formatResponseUserDelete(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal_Server_Error" });
    }
}