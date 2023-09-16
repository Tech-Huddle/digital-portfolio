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



exports.cvDetailsList = async (params, next) => {
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

        let userData = await db.User.findOne({ where: { id: params.id } });
        let educationDetails = await db.EducationDetails.findAll({ where: { user_id: params.id } });
        let basicDetails = await db.BasicDetails.findOne({ where: { user_id: params.id } });
        let experianceDetails = await db.Experience.findAll({ where: { user_id: params.id } });
        let otherDetails = await db.OtherDetails.findOne({ where: { user_id: params.id } });
        var result = {
            "userData": userData,
            "experianceDetails": experianceDetails,
            "basicDetails": basicDetails,
            "otherDetails": otherDetails,
            "educationDetails": educationDetails
        }
        return ({ "data": JSON.parse(JSON.stringify(result)), "success": true });

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        let errorMsg = error.message || JSON.stringify(error);
        next({ "success": false, "message": "Internal Server Error" });
    }
}


