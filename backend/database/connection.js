const Sequelize = require('sequelize');
const EV = require('../src/enviroment');

const sequelize = new Sequelize(
    EV.DBNAME, 
    EV.DBUSERNAME, 
    EV.DBPASSWORD, 
    { 
      host: EV.DBHOST,
      port: EV.DBPORT,
      dialect: 'mysql',
      timezone: "+01:00",
      logging: false,
      reconnect:true,
      dialectOptions: {
        connectTimeout: 60000
      },
      pool: {
        max: 5,
        min: 0,
        acquire: 120000, 
        idle: 120000,
        evict: 120000,
        handleDisconnects: true
      }
    }
);

module.exports = sequelize;