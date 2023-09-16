const Sequelize = require('sequelize');
const sequelize = require('../../database/connection');
module.exports = sequelize.define('TechnicalSkill', {
    id: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type:  Sequelize.INTEGER,
        allowNull: false
      },
      key: {
        type:  Sequelize.INTEGER,
      },
     value:{
        type: Sequelize.STRING
     },


}, {
    tableName: 'technical_skill'
})