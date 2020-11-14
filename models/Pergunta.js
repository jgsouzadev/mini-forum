const Sequelize = require('sequelize');
const connection = require('../database/database');

const Pergunta = connection.define('Pergunta', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force: false});

module.exports = Pergunta;