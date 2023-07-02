'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('other_details', {
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('other_details');
  }
};