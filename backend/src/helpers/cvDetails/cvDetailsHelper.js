const logger = require('../../logger/logger');
const { getName } = require('../../logger/logFunctionName');
const { checkOpKeys } = require('../common/searchOpKeys');
const Joi = require('joi');


exports.validateParamsCvDetailsList = async (req, next) => {
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

exports.formatResponseCvDetailsList = (params) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    let result = {};
    if (params.success) {
       
        data=params.data;
        console.log("result=============>>", data);
        let formated_data={}
        formated_data["name"]=data.basicDetails.first_name +" "+data.basicDetails.last_name;
        formated_data["email"]=data.basicDetails.email;
        formated_data["phone"]=data.basicDetails.phone_number;
        formated_data["address"]=data.basicDetails.address;
        formated_data["objective"]=data.basicDetails.objective;
        formated_data["head-line"]=data.basicDetails.headline;
        formated_data["languages"]=JSON.parse(data.basicDetails.language);
        formated_data["academics"]=[];
        for(let i=0; i<data.educationDetails.length; i++){
            let temp={};
            temp["course"]=data.educationDetails[i].course;
            temp["major"]=data.educationDetails[i].major;
            temp["institute"]=data.educationDetails[i].institution_Name;
            temp["pass-year"]=data.educationDetails[i].end_Date;
            formated_data["academics"].push(temp);
        }
        formated_data["online-presence"]={};
        formated_data["online-presence"]["github"]=data.otherDetails.git_hub_url;
        formated_data["online-presence"]["linkedin"]=data.otherDetails.linkedIn_url;
        formated_data["online-presence"]["instagram"]=data.otherDetails.instagram;
        formated_data["online-presence"]["facebook"]=data.otherDetails.facebook_url;
        formated_data["online-presence"]["reddit"]=data.otherDetails.reddit;
        formated_data["online-presence"]["youtube"]=data.otherDetails.youtube_url;
        formated_data["online-presence"]["stackoverflow"]=data.otherDetails.stackoverflow;
        formated_data["online-presence"]["others"]=data.otherDetails.others;
        formated_data["online-presence"]["personal-website"]=data.otherDetails.personal_website;
        formated_data["online-presence"]["twitter"]=data.otherDetails.twitter_url;

        
        
        result = {
            "status": 200,
            "success": true,
            "data":formated_data,
            "message": params.message
        };
    }
    logger.info("* Ending %s of %s *", getName().functionName, getName().fileName);
    return (result);
}
