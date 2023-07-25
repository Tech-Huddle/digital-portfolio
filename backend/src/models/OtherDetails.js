const Sequelize = require('sequelize');
const sequelize = require('../../database/connection');
module.exports = sequelize.define('OtherDetails', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  git_hub_url: {
    type: Sequelize.STRING,

  },
  linkedIn_url: {
    type: Sequelize.STRING,

  },
  twitter_url: {
    type: Sequelize.STRING,

  },
  facebook_url: {
    type: Sequelize.STRING,

  },
  youtube_url: {
    type: Sequelize.STRING,

  },
  portfolio_url: {
    type: Sequelize.STRING,

  }
}, {
  tableName: 'other_details'
})