const Sequelize = require('sequelize');
const connection = require('./../database');

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

Pergunta.sync({force: false})
.then(() => {
    console.log('tabela criada')
})

module.exports = Pergunta;