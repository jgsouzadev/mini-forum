const Pool = require("pg").Pool;
const Sequelize = require('sequelize');

const connection = new Sequelize('projeto', '', '', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;
