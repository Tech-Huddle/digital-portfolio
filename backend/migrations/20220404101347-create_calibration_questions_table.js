'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('calibration_questions', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      display_type: {
        type: Sequelize.STRING
      },
      header: {
        type: Sequelize.STRING
      },
      page_note: {
        type: Sequelize.TEXT
      },
      ques_header: {
        type: Sequelize.STRING
      },
      ques_text: {
        type: Sequelize.STRING
      },
      probable_answer: {
        type: Sequelize.TEXT
      },
      appropriate_answer: {
        type: Sequelize.STRING
      },
      error_msg: {
        type: Sequelize.STRING
      },
      is_active: {
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('calibration_questions');
  }
};
