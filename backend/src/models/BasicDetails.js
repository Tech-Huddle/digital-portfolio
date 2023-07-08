const Sequelize = require('sequelize');
const sequelize = require('../../database/connection');
module.exports = sequelize.define('BasicDetails', {
    id: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type:  Sequelize.INTEGER,
        allowNull: false
      },
      first_name: {
        type:  Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email_address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      objective: {
        type: Sequelize.STRING,
        allowNull: false
      },
      headline: {
        type: Sequelize.STRING,
        allowNull: false
      },
      profile_img_url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      language: {
        type: Sequelize.STRING,
        allowNull: false
      },

}, {
    tableName: 'basic_details'
})