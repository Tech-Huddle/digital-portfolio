const logger = require('../../logger/logger');
const { getName } = require('../../logger/logFunctionName');

const sequelizeOpKeys = ["eq","ne","is","not","or","gt","lt","gte","lte","between",
"notBetween","in","notIn","like","notLike","startsWith","endsWith","substring","asc","desc"];

exports.checkOpKeys = (userGivenOpKeys) =>{
    logger.info("*** Starting %s of %s ***", getName().functionName, getName().fileName);
    return new Promise((resolve,reject) =>{
        let count = 0;
        userGivenOpKeys.forEach(opKey => {
            if(!sequelizeOpKeys.includes(opKey)){
                resolve ({"success":false, "message":[`%s is not allowed, you may try with %s`,`${opKey}`,`${sequelizeOpKeys}`]});
                logger.error(`${opKey} is not allowed in checkOpKeys of searchOpKeys.js`);
                return;
            }
            count += 1;
        });
        if(count == userGivenOpKeys.length){
            logger.info("*** Ending checkOpKeys of searchOpKeys.js***"); 
            resolve ({"success":true});
        }
    })
}