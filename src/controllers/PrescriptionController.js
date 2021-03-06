const { update } = require('../database/connection');
const knex = require('../database/connection');

module.exports = {    
    async index(req, res) {        
        const results = await knex('prescricoes')
        return res.json(results)
    },

    async onlyOneInformation(req, res) {  
        try {
            const { id } = req.params
            const results = await knex('prescricoes').where({IdPrescricao: id})
            return res.json(results)
        } catch (error) {
            return res.status(500).send();
        }
    },

    async create(req, res, next) {  
        try {
            const { IdPaciente, Identificacao, Data, IdProfissional, Situacao, DataAssinatura,
                    IdUsuario } = req.body
            await knex('prescricoes')
            .insert({ IdPaciente, Identificacao, Data, IdProfissional, Situacao, DataAssinatura,
                      IdUsuario });

            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { IdPaciente, Identificacao, Data, IdProfissional, Situacao, DataAssinatura,
                    IdUsuario } = req.body
            const { id } = req.params

            await knex('prescricoes')
            .update({ IdPaciente, Identificacao, Data, IdProfissional, Situacao, DataAssinatura,
                      IdUsuario })
            .where({ IdPrescricao: id });

            return res.send();

        } catch (error) {            
            next(error);
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('prescricoes')
            .where({ IdPrescricao: id })
            .del();

            return res.send();

        } catch (error) {            
            next(error);
        }
    }
}
