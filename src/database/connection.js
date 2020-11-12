const knex = require('knex');
const configuration = require('../../knexfile');

const dbConfig  = knex(configuration.development);

var connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

module.exports = connection;
