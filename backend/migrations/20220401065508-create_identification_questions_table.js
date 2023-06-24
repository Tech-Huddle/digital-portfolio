'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('identification_questions', {
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
      max_allowed: {
        type: Sequelize.INTEGER
      },
      min_allowed: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('identification_questions');
  }
};
