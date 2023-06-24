const logger = require('../../logger/logger');
const { getName } = require('../../logger/logFunctionName');
const { checkOpKeys } = require('../common/searchOpKeys');
const Joi = require('joi');

exports.validateParamsUserCreate = (req, next) => {
    logger.info("*** Starting %s of %s ***", getName().functionName, getName().fileName);
    try {
        let data = req;
        const schemas = Joi.object({
            first_name: Joi.string().min(1).required(),
            last_name: Joi.string().min(1).required(),
            email: Joi.string().min(1).required().email(),
            phone_number: Joi.string().min(1).required(),
            role: Joi.string().min(1).required()
        });
        let validation = schemas.validate(data);
        if (validation.error) {
            logger.error(`*** ${validation.error.details[0].message} in %s of %s ***`, getName().functionName, getName().fileName);
            return ({ "status": 400, "success": false, "message": validation.error.details[0].message });
        } else {
            logger.info("* Ending %s of %s *", getName().functionName, getName().fileName);
            return ({ "status": 200, "success": true, "data": data });
        }
    } catch (err) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(err.message || JSON.stringify(err));
        return ({ "status": 500, "success": false, "message": "Internal_Server_Error" });
    }
}

exports.formatResponseUserCreate = (params) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    let result = {};
    if (params.success) {
        result = {
            "status": 200,
            "success": true,
            "message": params.message
        };
    }
    logger.info("* Ending %s of %s *", getName().functionName, getName().fileName);
    return (result);
}

exports.validateParamsUserList = async (req, next) => {
    logger.info("*** Starting %s of %s ***", getName().functionName, getName().fileName);
    try {
        let id = req.params.id || null;
        let filters = req.query.filters || null;
        let filter_op = req.query.filter_op || null;
        let result = {};
        let data_hash = { "id": id };
        if (filters) {
            let filters_obj = JSON.parse(filters);
            let filter_arr = Object.keys(filters_obj);
            let filter = {};
            filter_arr.forEach(e => {
                filter[e] = filters_obj[e]
            });
            if (Object.keys(filter).length > 0) {
                data_hash["filter"] = filter;
            }
        }
        if (filter_op) {
            let filter_op_obj = JSON.parse(filter_op);
            var isPassedOpKeys = await checkOpKeys(Object.values(filter_op_obj));
            if (!isPassedOpKeys.success) {
                result = {
                    "success": false,
                    "message": isPassedOpKeys.message
                };
                return (result);
            }
            if (Object.keys(filter_op_obj).length > 0) {
                data_hash["filter_op"] = filter_op_obj;
            }
        }
        result = {
            "success": true,
            "data": data_hash
        };
        logger.info("* Ending %s of %s *", getName().functionName, getName().fileName);
        return (result);
    } catch (err) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(err.message || JSON.stringify(err));
        next({ "status": 500, "success": false, "message": "Internal_Server_Error" });
    }
}

exports.formatResponseUserList = (params) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    let result = {};
    if (params.success) {
        result = {
            "status": 200,
            "success": true,
            "data":params.data,
            "message": params.message
        };
    }
    logger.info("* Ending %s of %s *", getName().functionName, getName().fileName);
    return (result);
}

exports.validateParamsUserUpdate=(req,next)=>{
    logger.info("*** Starting %s of %s ***", getName().functionName, getName().fileName);
    try {
        let data = req.body;
        let id = req.params.id;
        let data_validate={};
        if(data.first_name){
            data_validate["first_name"] = Joi.string().min(1).required()
        }
        if(data.last_name){
            data_validate["last_name"] = Joi.string().min(1).required()
        }
        if(data.email){
            data_validate["email"] = Joi.string().min(1).required()
        }
        if(data.phone_number){
            data_validate["phone_number"] = Joi.string().min(1).required()
        }
        const schemas = Joi.object().keys(data_validate);
        const validation = schemas.validate(data);
        if (validation.error) {
            logger.error(`*** ${validation.error.details[0].message} in %s of %s ***`, getName().functionName, getName().fileName);
            return ({ "status": 400, "success": false, "message": validation.error.details[0].message });
        } else {
            logger.info("* Ending %s of %s *", getName().functionName, getName().fileName);
            return ({ "status": 200, "success": true, "data": data , "id": id});
        }
    } catch (err) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(err.message || JSON.stringify(err));
        return ({ "status": 500, "success": false, "message": "Internal_Server_Error" });
    }
}

exports.formatResponseUserUpdate=(params)=>{
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    let result = {};
    if (params.success) {
        result = {
            "status": 200,
            "success": true,
            "data":params.data,
            "message": params.message
        };
    }
    logger.info("* Ending %s of %s *", getName().functionName, getName().fileName);
    return (result);
}

exports.validateParamsUserDelete = (req,next)=>{
    logger.info("*** Starting %s of %s ***", getName().functionName, getName().fileName);
    try {
        let data = req.body.id;
        
        if (data==null) {
            logger.error(`*** data is not proper in %s of %s ***`, getName().functionName, getName().fileName);
            next({ "status": 400, "success": false, "message": "Data is not proper" });
        } else {
            logger.info("* Ending %s of %s *", getName().functionName, getName().fileName);
            return ({ "status": 200, "success": true, "data": data });
        }
    } catch (err) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(err.message || JSON.stringify(err));
        next ({ "status": 500, "success": false, "message": "Internal_Server_Error" });
    }
}

exports.formatResponseUserDelete=(params)=>{
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    let result = {};
    if (params.success) {
        result = {
            "status": 200,
            "success": true,
            "data":params.data,
            "message": params.message
        };
    }
    logger.info("* Ending %s of %s *", getName().functionName, getName().fileName);
    return (result);
}