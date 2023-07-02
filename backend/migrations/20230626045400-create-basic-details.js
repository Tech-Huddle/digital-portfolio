'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('basic_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_Id: {
        type:  Sequelize.INTEGER,
        allowNull: false
      },
      first_Name: {
        type:  Sequelize.STRING,
        allowNull: false
      },
      last_Name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone_Number: {
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
    await queryInterface.dropTable('basic_details');
  }
};