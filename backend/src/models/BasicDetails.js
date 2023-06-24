const Sequelize = require('sequelize');
const sequelize = require('../../database/connection');
module.exports = sequelize.define('BasicDetails', {
    Id: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      User_Id: {
        type:  Sequelize.INTEGER,
        allowNull: false
      },
      First_Name: {
        type:  Sequelize.STRING,
        allowNull: false
      },
      Last_Name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Phone_Number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Email_address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Objective: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Headline: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Profile_img_url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      Language: {
        type: Sequelize.STRING,
        allowNull: false
      },

}, {
    tableName: 'basic_details'
})