const Sequelize = require('sequelize');
const sequelize = require('../../database/connection');
module.exports = sequelize.define('OtherDetails', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      git_hub_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      linkedIn_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      twitter_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      facebook_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      youtube_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      portfolio_url: {
        type: Sequelize.STRING,
        allowNull: false,
      }
}, {
    tableName: 'other_details'
})