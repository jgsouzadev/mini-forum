const Pool = require("pg").Pool;
const Sequelize = require('sequelize');

const connection = new Sequelize('projeto', 'joaogui', 'senhagui', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;
