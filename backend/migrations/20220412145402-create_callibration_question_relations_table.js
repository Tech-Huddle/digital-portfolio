'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('callibration_question_relations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      callibration_id: {
        type: Sequelize.INTEGER
      },
      callibration_question_id: {
        type: Sequelize.INTEGER
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('callibration_question_relations');
  }
};
