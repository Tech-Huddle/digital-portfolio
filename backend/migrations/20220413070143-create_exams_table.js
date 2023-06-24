'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cust_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      main_test_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      exam_start: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      valid_until: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      exam_start_at: {
        type: Sequelize.DATE
      },
      send_to_customer: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      send_report: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      submit_exam: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      exam_submit_at: {
        type: Sequelize.DATE
      },
      analyzing: {
        type: Sequelize.STRING
      },
      delay_time: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      exam_score: {
        type: Sequelize.INTEGER
      },
      exam_language: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('exams');
  }
};
