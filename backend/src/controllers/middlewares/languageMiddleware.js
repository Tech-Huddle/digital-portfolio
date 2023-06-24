const { enLang } = require('../../languages/english');
const { frLang } = require('../../languages/french');

const logger = require('../../logger/logger');
const { getName } = require('../../logger/logFunctionName');

exports.languageMiddleware = (responseMsg, req, res, next) => {
    logger.info("* Starting %s of %s *", getName().functionName, getName().fileName);
    let language = req.headers.language || "en";
    if (typeof responseMsg === 'string' || responseMsg instanceof String) {
        res.status(200).json(getMessageAccordingTOLang(responseMsg, language));
    }
    else if (!Array.isArray(responseMsg)) {
        let status = responseMsg.status || 200;
        responseMsg.language = responseMsg.language || language;
        let response = responseDataFormat(responseMsg);
        if (response.success) {
            logger.info("*** Ending %s of %s ***", getName().functionName, getName().fileName);
            res.status(status).json(responseDataFormat(responseMsg));
        } else {
            logger.info("*** Ending %s of %s ***", getName().functionName, getName().fileName);
            if (response.status != 406 && response.status != 403 && response.status != 400 && response.status != 409 && response.status != 404) {
                delete response.status;
            }
            next(response);
        }
    }
    else {
        var temp = [];
        var status = 200;
        for (var i = 0; i < responseMsg.length; i++) {
            responseMsg[i].language = responseMsg[i].language || language;
            temp.push(responseDataFormat(responseMsg[i]));
            console.log("****1", responseMsg[i].status)
            if (responseMsg[i].status != 200) {
                status = responseMsg[i].status || 200;
            }
        }
        logger.info("*** Ending %s of %s ***", getName().functionName, getName().fileName);
        res.status(status).json(temp);
    }
}
responseDataFormat = (responseMsg) => {
    logger.info("* Starting responseDataFormat of %s *", getName().fileName);
    let lang = responseMsg.language || 'en';
    let status = responseMsg.status || 200;
    let message = responseMsg.message || "";
    let data = responseMsg.data || [];
    let generic_data = responseMsg.generic_data || [];
    let response_hash = Object.assign({}, responseMsg);
    response_hash['status'] = status;
    response_hash['message'] = translateMsgOnly(responseMsg.message, lang);
    if (Array.isArray(generic_data) && generic_data.length > 0) {
        response_hash['generic_data'] = genericMsgAccToLang(generic_data, lang);
    }
    else if (Array.isArray(data) && data.length > 0) {
        response_hash['data'] = genericModelMsgAccToLang(data, lang);
    }
    else {
        response_hash['success'] = responseMsg.success;
        if (Array.isArray(data) && data.length > 0)
            response_hash['data'] = data;
        else
            response_hash['data'] = data;
    }
    for (const [key, value] of Object.entries(response_hash)) {
        if (key.indexOf("_data") > -1 && Array.isArray(value) && value.length > 0) {
            response_hash[key] = genericModelMsgAccToLang(value, lang);
        }
    }
    if (response_hash.hasOwnProperty('language')) delete response_hash['language'];
    logger.info("*** Ending responseDataFormat of %s ***", getName().fileName);
    return response_hash;
}
getMessageAccordingTOLang = (msgKey, lang) => {
    logger.info("* Starting getMessageAccordingTOLang of %s *", getName().fileName);
    if (isStringJSON(msgKey)) return msgKey;
    let msgKeyOld = msgKey;
    if (Array.isArray(msgKey)) {
        msgKey = msgKey[0];
    }

    let langMsg = "";
    if (lang == 'fr') {
        langMsg = frLang[msgKey];
    }
    if (lang == 'en') {
        langMsg = enLang[msgKey];
    }
    if (!langMsg) langMsg = msgKey;
    if (Array.isArray(msgKeyOld)) {
        msgKeyOld[0] = langMsg;
        langMsg = formatMsgParam(msgKeyOld);
    }
    logger.info("*** Ending responseDataFormat of %s ***", getName().fileName);
    return langMsg;
}

isStringJSON = (msg_string) => {
    logger.info("* Starting isStringJSON of %s *", getName().fileName);
    let is_json = true;
    try {
        const json = JSON.parse(msg_string);
    } catch (e) {
        is_json = false;
    }
    logger.info("*** Ending isStringJSON of %s ***", getName().fileName);
    return is_json;
}
genericMsgAccToLang = (obj, lang) => {
    logger.info("* Starting genericMsgAccToLang of %s *", getName().fileName);
    for (let i = 0; i < obj.length; i++) {
        let modelobj = obj[i];
        let modelNames = Object.keys(modelobj);
        for (let k = 0; k < modelNames.length; k++) {
            let modelName = modelNames[k];
            let respObjects = modelobj[modelName];
            for (let j = 0; j < respObjects.length; j++) {
                let responseObj = respObjects[j];
                let resMsg = getMessageAccordingTOLang(responseObj.message, lang);
                responseObj.message = resMsg;
            }
        }
    }
    logger.info("*** Ending genericMsgAccToLang of %s ***", getName().fileName);
    return obj;
}
//Generic msg translate
genericModelMsgAccToLang = (respObjects, lang) => {
    logger.info("* Starting genericModelMsgAccToLang of %s *", getName().fileName);
    for (let j = 0; j < respObjects.length; j++) {
        let responseObj = respObjects[j];
        if (responseObj.hasOwnProperty("message")) {
            let resMsg = translateMsgOnly(responseObj.message, lang);
            respObjects[j].message = resMsg;
        }
    }
    logger.info("*** Ending genericModelMsgAccToLang of %s ***", getName().fileName);
    return respObjects;
}
translateMsgOnly = (message, lang) => {
    logger.info("* Starting translateMsgOnly of %s *", getName().fileName);
    if (Array.isArray(message) && message.length > 0) {
        if (!(typeof message[0] === 'string' || message[0] instanceof String)) {
            for (let k = 0; k < message.length; k++) {
                if (message[k].hasOwnProperty("message")) {
                    message[k].message = getMessageAccordingTOLang(message[k].message, lang)
                }
            }
        } else {
            message = getMessageAccordingTOLang(message, lang)
        }
        logger.info("*** Ending translateMsgOnly of %s ***", getName().fileName);
        return message;
    }
    else if (typeof message === 'string' || message instanceof String) {
        logger.info("*** Ending translateMsgOnly of %s ***", getName().fileName);
        return getMessageAccordingTOLang(message, lang);
    } else {
        logger.info("*** Ending translateMsgOnly of %s ***", getName().fileName);
        return message;
    }
}
// This function will format parameter based msg into string
//let msg = ["%s hello word %s", "Ram", "Worked"];
formatMsgParam = (msg) => {
    logger.info("* Starting formatMsgParam of %s *", getName().fileName);
    if (Array.isArray(msg)) {
        if (msg.length > 0) {
            let msgS = msg[0];
            msg.shift();
            msg.map((s) => {
                msgS = msgS.replace("%s", s);
            })
            return msgS;
        }
    }
    logger.info("*** Ending formatMsgParam of %s ***", getName().fileName);
    return msg;
}