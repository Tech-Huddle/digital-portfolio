const EV = require('../../enviroment');
const logger = require('../../logger/logger');
const { getName } = require('../../logger/logFunctionName');
const { validateParamsCvDetailsList,formatResponseCvDetailsList } = require('../../helpers/cvDetails/cvDetailsHelper');

const { cvDetailsList } = require('../../models/queryModels/cvDetails/cvDetailsModel');

exports.listCvDetails = async (req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    try {
        let data = req;
        let validDatas = await validateParamsCvDetailsList(data, next);
        if (validDatas.success) {
            result = await cvDetailsList(validDatas, next)
            res.send({ "message": "success", "data": formatResponseCvDetailsList(result) });
        } else {
            next({ "message": validDatas.message });
        }

    } catch (error) {
        logger.error("*** Error in %s of %s ***", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        next({ message: "Internal Server Error" });
    }
}