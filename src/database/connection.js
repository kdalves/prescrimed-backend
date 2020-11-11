const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

connection.once("open", () => {
    console.log("mysql conectado");
}).catch((err) => {
    console.log("mysql cagou no pate");
});

module.exports = connection;
