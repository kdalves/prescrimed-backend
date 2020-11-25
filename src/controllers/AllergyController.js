const { update } = require('../database/connection');
const knex = require('../database/connection');

module.exports = {    
    async index(req, res) {        
        const results = await knex('PacienteAlergias')
        return res.json(results)
    },

    async onlyOneInformation(req, res) {  
        try {
            const { id } = req.params
            const results = await knex('PacienteAlergias').where({IdPaciente: id})
            return res.json(results)
        } catch (error) {
            return res.status(500).send();
        }
    },

    async create(req, res, next) {  
        try {
            const { IdPaciente, Alergia } = req.body
            await knex('PacienteAlergias')
            .insert({IdPaciente, Alergia });

            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { IdPaciente, Alergia } = req.body
            const { id } = req.params

            await knex('PacienteAlergias')
            .update({ IdPaciente, Alergia })
            .where({ IdPaciente: id });

            return res.send();

        } catch (error) {            
            next(error);
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('PacienteAlergias')
            .where({ IdPaciente: id })
            .del();

            return res.send();

        } catch (error) {            
            next(error);
        }
    }
}
