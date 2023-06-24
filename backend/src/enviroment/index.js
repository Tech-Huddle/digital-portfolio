require('dotenv').config()
const env = process.env.NODE_ENV || 'development';
//var EV = env == 'development'? require('../../config/enviroment.json') : process.env;
EV = process.env;
module.exports = EV;