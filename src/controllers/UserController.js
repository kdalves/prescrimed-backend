const knex = require('../database/connection');

module.exports = {    
    async index(req, res) {        
        const results = await knex('usuarios')
        return res.json(results)
    }
}