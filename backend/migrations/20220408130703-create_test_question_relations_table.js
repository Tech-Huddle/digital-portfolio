'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('test_question_relations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      test_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      order_number: {
        type: Sequelize.INTEGER
      },
      question_id: {
        type: Sequelize.STRING,
        allowNull: false
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
    }).then(function() {
      return queryInterface.sequelize.query(
        'ALTER TABLE `test_question_relations` ADD UNIQUE `ques_index`(`test_id`, `question_id`)'
      );
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('test_question_relations');
  }
};
