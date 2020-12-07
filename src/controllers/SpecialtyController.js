const { update } = require('../database/connection');
const knex = require('../database/connection');

module.exports = {    
    async onlyOneInformation(req, res) {  
        try {
            const { id } = req.params
            const results = await knex('Especialidades').where({IdEspecialidade: id})
            return res.json(results)
        } catch (error) {
            return res.status(500).send();
        }
    }
}
