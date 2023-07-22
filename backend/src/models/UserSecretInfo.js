const Sequelize = require('sequelize');
const sequelize = require('../../database/connection');
module.exports = sequelize.define('UserSecretInfo', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    user_id: {
        type: Sequelize.INTEGER,
    },
    password: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.STRING,
    },
    

}, {
    tableName: 'user_secret_info'
})