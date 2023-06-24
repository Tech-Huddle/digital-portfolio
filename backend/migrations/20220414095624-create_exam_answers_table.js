'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exam_answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cust_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cust_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      test_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      test_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      identification_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      identification_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      callibration_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      callibration_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      main_test_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      main_test_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      exam_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      exam_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      result: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      identification_hash: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      callibration_hash: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      reading_data: {
        type: Sequelize.TEXT
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('exam_answers');
  }
};
