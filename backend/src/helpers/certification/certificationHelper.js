const logger = require('../../logger/logger');
const { getName } = require('../../logger/logFunctionName');
const { checkOpKeys } = require('../common/searchOpKeys');
const Joi = require('joi');

exports.validateParamscertificationCreate = (req, next) => {
    logger.info("*** Starting %s of %s ***", getName().functionName, getName().fileName);
    try {
        let data = req;
        const schemas = Joi.object({
            user_id: Joi.number().required(),
            name: Joi.string().min(1).required(),
            organization: Joi.string().min(1).required(),
            issue_date: Joi.string().min(1).required(),
            expiary_date: Joi.string().min(1).required(),
            credential_id: Joi.string().min(1).required(),
            credential_url: Joi.string().min(1).required(),
            certification_badge: Joi.string().min(1).required()

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
        return ({ "status": 500, "success": false, "message": "Internal Server Error" });
    }
}

exports.formatResponsecertificationCreate = (params) => {
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

exports.validateParamscertificationList = async (req, next) => {
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
        next({ "status": 500, "success": false, "message": "Internal Server Error" });
    }
}

exports.formatResponsecertificationList = (params) => {
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

exports.validateParamscertificationUpdate=(req,next)=>{
    logger.info("*** Starting %s of %s ***", getName().functionName, getName().fileName);
    try {
        let data = req.body;
        let id = req.params.id;
        let data_validate={};
        if(data.name){
            data_validate["name"] = Joi.string().min(1).required()
        }
        if(data.organization){
            data_validate["organization"] = Joi.string().min(1).required()
        }
        if(data.issue_date){
            data_validate["issue_date"] = Joi.string().min(1).required()
        }
        if(data.expiary_date){
            data_validate["expiary_date"] = Joi.string().min(1).required()
        }
        if(data.credential_id){
            data_validate["credential_id"] = Joi.string().min(1).required()
        }
        if(data.credential_url){
            data_validate["credential_url"] = Joi.string().min(1).required()
        }
        if(data.certification_badge){
            data_validate["certification_badge"] = Joi.string().min(1).required()
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
        return ({ "status": 500, "success": false, "message": "Internal Server Error" });
    }
}

exports.formatResponsecertificationUpdate=(params)=>{
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

exports.validateParamscertificationDelete = (req,next)=>{
    logger.info("*** Starting %s of %s ***", getName().functionName, getName().fileName);
    try {
        let data = req.body.id;
        
        if (data==null) {
            logger.error(`*** data is not proper in %s of %s ***`, getName().functionName, getName().fileName);
            return({ "status": 400, "success": false, "message": "Data is not proper" });
        } else {
            logger.info("* Ending %s of %s *", getName().functionName, getName().fileName);
            return ({ "status": 200, "success": true, "data": data });
        }
    } catch (err) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(err.message || JSON.stringify(err));
        next ({ "status": 500, "success": false, "message": "Internal Server Error" });
    }
}

exports.formatResponsecertificationDelete=(params)=>{
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