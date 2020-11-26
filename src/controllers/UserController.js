const { update } = require('../database/connection');
const knex = require('../database/connection');

module.exports = {    
    async index(req, res) {        
        const results = await knex('usuarios')
        return res.json(results)
    },

    async onlyOneInformation(req, res) {
        try {
            const { id } = req.params
            const results = await knex('usuarios').where({IdUsuario: id})
            return res.json(results)
        } catch (error) {
            return res.status(500).send();
        }
    },

    async create(req, res, next) {  
        try {
            const { Nome, CPF, Admin, Status } = req.body
            await knex('usuarios')
            .insert({ Nome, CPF, Admin, Status });

            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { Nome, CPF, Admin, Status } = req.body
            const { id } = req.params

            await knex('usuarios')
            .update({ Nome, CPF, Admin, Status })
            .where({ IdUsuario: id });

            return res.send();

        } catch (error) {            
            next(error);
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('usuarios')
            .where({ IdUsuario: id })
            .del();

            return res.send();

        } catch (error) {            
            next(error);
        }
    }
}
