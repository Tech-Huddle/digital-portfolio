const EV = require("../../enviroment");
const logger = require("../../logger/logger");
const { getName } = require("../../logger/logFunctionName");
const {
  validateParamsOtherDetailsCreate,
  formatResponseOtherDetailsCreate,
  validateParamsOtherDetailsList,
  formatResponseOtherDetailsList,
  validateParamsOtherDetailsUpdate,
  formatResponseOtherDetailsUpdate,
  validateParamsOtherDetailsDelete,
  formatResponseOtherDetailsDelete,
} = require("../../helpers/OtherDetails/OtherDetailsHelper");
const {
  otherDetailsCreate,
  otherDetailsList,
  otherDetailsUpdate,
  otherDetailsDelete,
} = require("../../models/queryModels/otherDetails/otherDetailsModel");

exports.createOtherDetails = async (req, res, next) => {
  logger.info(
    "* Starting %s of %s *",
    getName().functionName,
    getName().fileName
  );
  try {
    let data = req.body;
    let validDatas = validateParamsOtherDetailsCreate(data);
    if (validDatas.success) {
      result = await otherDetailsCreate(validDatas, next);
      res.send({
        message: "success",
        data: formatResponseOtherDetailsCreate(result),
      });
    } else {
      next({ message: validDatas.message, status: validDatas.status });
    }
  } catch (error) {
    logger.error(
      "*** Error in %s of %s ***",
      getName().functionName,
      getName().fileName
    );
    logger.error(error.message || JSON.stringify(error));
    next({ message: "Internal Server Error" });
  }
};

exports.listOtherDetails = async (req, res, next) => {
  logger.info(
    "* Starting %s of %s *",
    getName().functionName,
    getName().fileName
  );
  try {
    let data = req;
    let validDatas = await validateParamsOtherDetailsList(data, next);
    if (validDatas.success) {
      result = await otherDetailsList(validDatas, next);
      res.send({
        message: "success",
        data: formatResponseOtherDetailsList(result),
      });
    } else {
      next({ message: validDatas.message });
    }
  } catch (error) {
    logger.error(
      "*** Error in %s of %s ***",
      getName().functionName,
      getName().fileName
    );
    logger.error(error.message || JSON.stringify(error));
    next({ message: "Internal Server Error" });
  }
};

exports.updateOtherDetails = async (req, res, next) => {
  logger.info(
    "* Starting %s of %s *",
    getName().functionName,
    getName().fileName
  );
  try {
    let validDatas = validateParamsOtherDetailsUpdate(req);
    if (validDatas.success) {
      result = await otherDetailsUpdate(validDatas, next);
      res.send({
        message: "success",
        data: formatResponseOtherDetailsUpdate(result),
      });
    } else {
      next({ message: validDatas.message, status: validDatas.status });
    }
  } catch (error) {
    logger.error(
      "*** Error in %s of %s ***",
      getName().functionName,
      getName().fileName
    );
    logger.error(error.message || JSON.stringify(error));
    next({ message: "Internal Server Error" });
  }
};

exports.deleteOtherDetails = async (req, res, next) => {
  logger.info(
    "* Starting %s of %s *",
    getName().functionName,
    getName().fileName
  );
  try {
    let validDatas = validateParamsOtherDetailsDelete(req);
    if (validDatas.success) {
      result = await otherDetailsDelete(validDatas, next);
      res.send({
        message: "success",
        data: formatResponseOtherDetailsDelete(result),
      });
    } else {
      next({ message: validDatas.message, status: validDatas.status });
    }
  } catch (error) {
    logger.error(
      "*** Error in %s of %s ***",
      getName().functionName,
      getName().fileName
    );
    logger.error(error.message || JSON.stringify(error));
    next({ message: "Internal Server Error" });
  }
};
