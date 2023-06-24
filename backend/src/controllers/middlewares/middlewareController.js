const {
    validateAuth
} = require("../../helpers/common/authenticationHelper");


const logger = require('../../logger/logger');
const { getName } = require('../../logger/logFunctionName');
const jwt_decode = require('jwt-decode');


exports.authenticate = (req, res, next) => {
    try {
        logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
        // check if params are present
        const validatedAuth = validateAuth(req, next);
        if (validatedAuth.success) {
            var token = validatedAuth.data.split(" ")[1];
            if (token && token.trim() != "") {
                var userDetails = jwt_decode(token);
                req.currentUser = userDetails;
                logger.info("* Ending %s of %s *", getName().functionName, getName().fileName);
                next();
            } else {
                logger.error(`Invalid token in %s of %s`, getName().functionName, getName().fileName);
                next({ status: 401, message: "Invalid_Authorization_Token" });
                return;
            }
        }
    } catch (err) {
        logger.error(`${err.message || JSON.stringify(err)} in %s of %s`, getName().functionName, getName().fileName);
        next({ message: err.message || JSON.stringify(err) });
        return;
    }
}

exports.appAdminAccessMiddleware = (req, res, next) => {
    try {
        logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
        // check if params are present
        const currentCognitoUserDetails = req.currentUser;
        let userParams = JSON.parse(currentCognitoUserDetails['custom:user_details']);
        let current_user_type = userParams.user_type;
        if (current_user_type == "app_admin") {
            logger.info("* Ending %s of %s *", getName().functionName, getName().fileName);
            next();
        } else {
            logger.error(`Access denied in %s of %s`, getName().functionName, getName().fileName);
            next({ status: 406, message: "Access denied" });
            return;
        }
    } catch (err) {
        logger.error(`${err.message || JSON.stringify(err)} in %s of %s`, getName().functionName, getName().fileName);
        next({ message: err.message || JSON.stringify(err) });
        return;
    }
}

exports.adminAccessMiddleware = (req, res, next) => {
    try {
        logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
        // check if params are present
        const currentCognitoUserDetails = req.currentUser;
        let userParams = JSON.parse(currentCognitoUserDetails['custom:user_details']);
        let current_user_type = userParams.user_type;
        if (current_user_type == "admin") {
            logger.info("* Ending %s of %s *", getName().functionName, getName().fileName);
            next();
        } else {
            logger.error(`Access denied in %s of %s`, getName().functionName, getName().fileName);
            next({ status: 406, message: "Access denied" });
            return;
        }
    } catch (err) {
        logger.error(`${err.message || JSON.stringify(err)} in %s of %s`, getName().functionName, getName().fileName);
        next({ message: err.message || JSON.stringify(err) });
        return;
    }
}

exports.examineesAccessMiddleware = (req, res, next) => {
    try {
        logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
        // check if params are present
        const currentCognitoUserDetails = req.currentUser;
        let userParams = JSON.parse(currentCognitoUserDetails['custom:user_details']);
        let current_user_type = userParams.user_type;
        if (current_user_type == "examinees") {
            logger.info("* Ending %s of %s *", getName().functionName, getName().fileName);
            next();
        } else {
            logger.error(`Access denied in %s of %s`, getName().functionName, getName().fileName);
            next({ status: 406, message: "Access denied" });
            return;
        }
    } catch (err) {
        logger.error(`${err.message || JSON.stringify(err)} in %s of %s`, getName().functionName, getName().fileName);
        next({ message: err.message || JSON.stringify(err) });
        return;
    }
}

exports.adminOrExamineesAccessMiddleware = (req, res, next) => {
    try {
        logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
        // check if params are present
        const currentCognitoUserDetails = req.currentUser;
        let userParams = JSON.parse(currentCognitoUserDetails['custom:user_details']);
        let current_user_type = userParams.user_type;
        if (current_user_type == "examinees" || current_user_type == "admin") {
            logger.info("* Ending %s of %s *", getName().functionName, getName().fileName);
            next();
        } else {
            logger.error(`Access denied in %s of %s`, getName().functionName, getName().fileName);
            next({ status: 406, message: "Access denied" });
            return;
        }
    } catch (err) {
        logger.error(`${err.message || JSON.stringify(err)} in %s of %s`, getName().functionName, getName().fileName);
        next({ message: err.message || JSON.stringify(err) });
        return;
    }
}

exports.createUserMiddleware = (req, res, next) => {
    try {
        logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
        // check if params are present
        const currentCognitoUserDetails = req.currentUser;
        let userParams = JSON.parse(currentCognitoUserDetails['custom:user_details']);
        let current_user_type = userParams.user_type;
        for (let i = 0; i < req.body.length; i++) {
            if (current_user_type == "app_admin") {
                if (req.body[i].type == "examinees") {
                    req.body[i]['alert_message'] = "Access denied"
                }
            } else {
                if (req.body[i].type == "admin") {
                    req.body[i]['alert_message'] = "Access denied"
                }
            }
        }
        logger.info("* Ending %s of %s *", getName().functionName, getName().fileName);
        next();
    } catch (err) {
        logger.error(`${err.message || JSON.stringify(err)} in %s of %s`, getName().functionName, getName().fileName);
        next({ message: err.message || JSON.stringify(err) });
        return;
    }
}