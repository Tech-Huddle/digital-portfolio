const Sequelize = require('sequelize');
const sequelize = require('../../database/connection');
module.exports = sequelize.define('User', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    first_name: {
        type: Sequelize.STRING,
    },
    last_name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    phone_number: {
        type: Sequelize.STRING,
    },
    role: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.STRING,
    }

}, {
    tableName: 'users'
})