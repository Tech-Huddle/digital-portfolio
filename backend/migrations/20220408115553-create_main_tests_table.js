'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('main_tests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
      },
      identification_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      callibration_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      test_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      open_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      exp_date: {
        type: Sequelize.DATE,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('main_tests');
  }
};
