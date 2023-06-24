'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('french_test_questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      display_type: {
        type: Sequelize.STRING
      },
      header: {
        type: Sequelize.STRING,
        allowNull: true
      },
      page_note: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      regular_ques_text: {
        type: Sequelize.STRING,
        allowNull: true
      },
      regular_possible_ans: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      regular_appropriate_ans: {
        type: Sequelize.STRING,
        allowNull: true
      },
      stronger_ques_text: {
        type: Sequelize.STRING,
        allowNull: true
      },
      stronger_possible_ans: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      stronger_appropriate_ans: {
        type: Sequelize.STRING,
        allowNull: true
      },
      sub_ques_text: {
        type: Sequelize.STRING,
        allowNull: true
      },
      sub_possible_ans: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      sub_appropriate_ans: {
        type: Sequelize.STRING,
        allowNull: true
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('french_test_questions');
  }
};
