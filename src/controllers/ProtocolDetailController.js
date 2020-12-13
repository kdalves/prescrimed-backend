const { update } = require('../database/connection');
const knex = require('../database/connection');

module.exports = {    
    async index(req, res) {        
        const results = await knex('protocolodetalhes')
        return res.json(results)
    },

    async create(req, res, next) {  
        try {
            const { IdProtocolo, IdVia, IdMedicamento, Dose, MedidaDose, posologia } = req.body
            await knex('protocolodetalhes')
            .insert({ IdProtocolo, IdVia, IdMedicamento, Dose, MedidaDose, posologia });

            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    }
}
