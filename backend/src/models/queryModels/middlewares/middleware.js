const db = require('../../index');
const logger = require('../../../logger/logger');
const { getName } = require('../../../logger/logFunctionName');


exports.updateUserMiddleware = async (params, currentUserId, current_user_type, next) => {
    logger.info("*** Starting %s of %s ***", getName().functionName, getName().fileName);
    try {
        let id = params.id;
        let result = await db.User.findOne({ where: { id: id } });
        if ((current_user_type == "app_admin" && result.type == "admin") || (current_user_type == "admin" && result.type == "examinees") || (currentUserId == id)) {
            return (params)
        } else {
            next({ status: 406, "message": [`You are not eligible to update %s`, `${result.type}`], success: false });
        }
    } catch (error) {
        console.log(error)
        logger.error("* Error in %s of %s *", getName().functionName, getName().fileName);
        logger.error(error.message || JSON.stringify(error));
        let errorMsg = error.message || JSON.stringify(error);;
        next({ "message": errorMsg, success: false });
    }
}

exports.deleteUsersMiddleware = async (params, current_user_type, next) => {
    try {
        logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
        let ids = params.data.id;
        let id_arr = [];
        let not_acceptable_data_arr = [];
        for (let i = 0; i < ids.length; i++) {
            let element = ids[i];
            let result = await db.User.findOne({ where: { id: element } });
            if (result) {
                if ((result.type == "admin" && current_user_type == "app_admin") || (result.type == "examinees" && current_user_type == "admin")) {
                    id_arr.push(result.id);
                } else {
                    not_acceptable_data_arr.push({
                        success: false,
                        data: { id: result.id },
                        message: [`You are not eligible to delete %s`, `${result.type}`]
                    })
                }
            } else {
                id_arr.push(element);
            }
        }
        return ({ status: 200, success: true, data: { id: id_arr }, not_acceptable_data: not_acceptable_data_arr })
    } catch (err) {
        logger.error(`${err.message || JSON.stringify(err)} in %s of %s`, getName().functionName, getName().fileName);
        next({ message: err.message || JSON.stringify(err) });
        return;
    }
}