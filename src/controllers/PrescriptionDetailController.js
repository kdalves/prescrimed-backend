const { update } = require('../database/connection');
const knex = require('../database/connection');

module.exports = {    
    async index(req, res) {        
        const results = await knex('prescricaodetalhes')
        return res.json(results)
    },

    async create(req, res, next) {  
        try {
            const { IdPrescricao, IdVia, IdMedicamento, MedidaDose, IdProtocolo, posologia } = req.body
            await knex('prescricaodetalhes')
            .insert({ IdPrescricao, IdVia, IdMedicamento, MedidaDose, IdProtocolo, posologia });

            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    }
}
