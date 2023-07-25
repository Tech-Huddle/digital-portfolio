const Sequelize = require('sequelize');
const sequelize = require('../../database/connection');
module.exports = sequelize.define('Experience', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    organisation_Name: {
        type: Sequelize.STRING,
    },
    location: {
        type: Sequelize.STRING,
    },
    start_date: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    end_Date: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    responsibility: {
        type: Sequelize.STRING,
        allowNull: false,
    },

}, {
    tableName: 'experience'
})