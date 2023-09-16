const Sequelize = require('sequelize');
const sequelize = require('../../database/connection');
module.exports = sequelize.define('Certification', {
    id: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type:  Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        type:  Sequelize.STRING,
        allowNull: false
      },
     organization:{
        type: Sequelize.STRING
     },
     issue_date:{
        type: Sequelize.DATE
     },
     expiary_date:{
        type: Sequelize.DATE
     },
     credential_id:{
        type: Sequelize.STRING
     },
     credential_url:{
        type: Sequelize.STRING
     },
     certification_badge:{
        type: Sequelize.STRING
     },


}, {
    tableName: 'certification'
})