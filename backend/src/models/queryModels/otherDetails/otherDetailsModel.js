const db = require('../../index');
const s3 = require('../../../common_modules/aws_s3');
const EV = require('../../../enviroment');
const { Op } = require("sequelize");
const logger = require('../../../logger/logger');
const { getName } = require('../../../logger/logFunctionName');
const moment = require('moment');
const sequelize = require('sequelize');
const Sequelize = require("../../../../database/connection");



// ************************* Associations start ************************************************************


// ************************* Associations End **************************************************************


exports.otherDetailsCreate = async (params, next) => {
    logger.info("*** Starting %s of %s ***", getName().functionName, getName().fileName);
    try {

        var params = params.data;
        let result = {};
        result = await db.OtherDetails.create(params);
        logger.info("*** Ending %s of %s ***", getName().functionName, getName().fileName);
        return ({ "data": JSON.parse(JSON.stringify(result)), "success": true })
    } catch (error) {
        logger.error("* Error in %s of %s *", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        if (error.message == "Validation error") {
            logger.error("* Username already exist in %s of %s *", getName().functionName, getName().fileName);
            next({ "success": false, "message": "Username_Already_Exist", "status": 409 });
        } else {
            next({ "success": false, "message": "Internal Server Error" });
        }
    }
}

exports.otherDetailsList = async (params, next) => {
    logger.info("*** Starting %s of %s ***", getName().functionName, getName().fileName);
    try {
        params = params.data;
        var inner_hash = {};
        if (params.id) {
            inner_hash["id"] = params.id;
        }
        else if (params.filter) {
            if (Object.keys(params.filter).length > 0) {
                let filterKeys = Object.keys(params.filter);
                filterKeys.forEach(filterKey => {
                    if ((!(filterKey == "offset" || filterKey == "limit"))) {
                        inner_hash[filterKey] = params.filter[filterKey];
                    }
                })
            }
            if (params.filter_op) {
                if (Object.keys(params.filter_op).length > 0) {
                    let filter_op = params.filter_op;
                    let filter_op_keys = Object.keys(params.filter_op);
                    filter_op_keys.forEach(filterOpKey => {
                        if ((!(filterOpKey == "offset" || filterOpKey == "limit"))) {
                            inner_hash[filterOpKey] = { [Op[filter_op[filterOpKey]]]: params.filter[filterOpKey] }
                        }
                    })
                }
            }
        }
        var findAll_hash = {
            //subQuery: false,
            where: inner_hash,
            attributes: { exclude: ['created_by', 'createdAt', 'updatedAt'] }
        };
        if (params.filter && params.filter.hasOwnProperty('offset') && params.filter.hasOwnProperty('limit')) {
            let offset = typeof params.filter.offset == 'string' ? parseInt(params.filter.offset) : params.filter.offset;
            let limit = typeof params.filter.limit == 'string' ? parseInt(params.filter.limit) : params.filter.limit;
            findAll_hash["offset"] = offset;
            findAll_hash["limit"] = limit;
        }
        var result = await db.OtherDetails.findAll(findAll_hash);
        if (!params.filter || (params.filter && (!params.filter.total || parseInt(params.filter.total) == 0))) {
            delete findAll_hash.offset;
            delete findAll_hash.limit;
            var count = await db.OtherDetails.findAll(findAll_hash);
            logger.info("*** Ending %s of %s ***", getName().functionName, getName().fileName);
            return ({ "data": JSON.parse(JSON.stringify(result)), "total": count.length, "success": true });
        } else {
            logger.info("*** Ending %s of %s ***", getName().functionName, getName().fileName);
            return ({ "data": JSON.parse(JSON.stringify(result)), "total": parseInt(params.filter.total), "success": true });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        let errorMsg = error.message || JSON.stringify(error);
        next({ "success": false, "message": "Internal Server Error" });
    }
}

exports.otherDetailsUpdate = async (params, next) => {
    logger.info("*** Starting %s of %s ***", getName().functionName, getName().fileName);
    try {
        var id = params.id;
        var data = params.data;
        var dataExists = await db.OtherDetails.findOne({ where: { id: id } });
        dataExists = JSON.parse(JSON.stringify(dataExists));
        if (dataExists != null) {
            let updateData = await db.OtherDetails.update(
                data, {
                where: { id: id }
            });
            if (updateData[0] == 0) {
                logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
                next({ "message": "Update can not be performed", "success": false, "status": 405 })
            } else {
                logger.info("*** Ending %s of %s ***", getName().functionName, getName().fileName);
                return ({ "message": "Updated_Successfully", "success": true })
            }
        } else {
            logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
            next({ "message": "Id_Does_Not_Exist", "success": false, "status": 404 })
        }
    } catch (error) {
        console.log(error)
        logger.error("* Error in %s of %s *", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        let errorMsg = error.message || JSON.stringify(error);;
        next({ "success": false, "message": "Internal Server Error" });
    }
}

exports.otherDetailsDelete = async (params, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        var id = params.data;
        var dataExists = await db.OtherDetails.findOne({
            where: { id: id }
        });
        if (dataExists != null) {
            var result = await db.OtherDetails.destroy({
                where: { id: id }
            });
            return ({ "message": "Deleted Successfully", "success": true })
        } else {
            next({ "message": "Data not found", "success": false, "status": 404 });
        }
    } catch (error) {
        logger.error("* Error in %s of %s *", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        let errorMsg = error.message || JSON.stringify(error);;
        next({ "success": false, "message": "Internal Server Error" });
    }
}