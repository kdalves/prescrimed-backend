const knex = require('../database/connection');

module.exports = {    
    async index(req, res) {        
        const results = await knex('profissionais')
        return res.json(results)
    },

    async create(req, res, next) {  
        try {
            const { IdUsuario, Nome, CRM, CPF, Fone, Email, IdEspecialidade, IdCategoria, IdSetor } = req.body
            await knex('profissionais')
            .insert({ IdUsuario, Nome, CRM, CPF, Fone, Email, IdEspecialidade, IdCategoria, IdSetor });

            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { Nome, CRM, CPF, Fone, Email, IdEspecialidade, IdCategoria, IdSetor } = req.body
            const { id } = req.params

            await knex('profissionais')
            .update({ Nome, CRM, CPF, Fone, Email, IdEspecialidade, IdCategoria, IdSetor })
            .where({ IdProfissional: id });

            return res.send();

        } catch (error) {            
            next(error);
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('profissionais')
            .where({ IdProfissional: id })
            .del();

            return res.send();

        } catch (error) {            
            next(error);
        }
    }
}