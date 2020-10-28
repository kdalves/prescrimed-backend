const knex = require('../database/connection');

module.exports = {    
    async index(req, res) {        
        const results = await knex('protocolos')
        return res.json(results)
    },

    async create(req, res, next) {  
        try {
            const { Sigla, Descricao, Indicacao, created_at, updated_at, deleted_at } = req.body
            await knex('protocolos')
            .insert({ Sigla, Descricao, Indicacao, created_at, updated_at, deleted_at });

            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { Sigla, Descricao, Indicacao, created_at, updated_at, deleted_at } = req.body
            const { id } = req.params

            await knex('protocolos')
            .update({ Sigla, Descricao, Indicacao, created_at, updated_at, deleted_at })
            .where({ IdProtocolo: id });

            return res.send();

        } catch (error) {            
            next(error);
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('protocolos')
            .where({ IdProtocolo: id })
            .del();

            return res.send();

        } catch (error) {            
            next(error);
        }
    }
}