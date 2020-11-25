const { update } = require('../database/connection');
const knex = require('../database/connection');

module.exports = {    
    async index(req, res) {        
        const results = await knex('medicamentos')
        return res.json(results)
    },

    async onlyOneInformation(req, res) {  
        try {
            const { id } = req.params
            const results = await knex('medicamentos').where({IdMedicamento: id})
            return res.json(results)
        } catch (error) {
            return res.status(500).send();
        }
    },

    async create(req, res, next) {  
        try {
            const { Nome, Tipo } = req.body
            await knex('medicamentos')
            .insert({ Nome, Tipo });

            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { Nome, Tipo } = req.body
            const { id } = req.params

            await knex('medicamentos')
            .update({ Nome, Tipo })
            .where({ IdMedicamento: id });

            return res.send();

        } catch (error) {            
            next(error);
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('medicamentos')
            .where({ IdMedicamento: id })
            .del();

            return res.send();

        } catch (error) {            
            next(error);
        }
    }
}
