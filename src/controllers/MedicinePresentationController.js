const { update } = require('../database/connection');
const knex = require('../database/connection');

module.exports = {    
    async index(req, res) {        
        const results = await knex('medicamentodetalhes')
        return res.json(results)
    },

    async onlyOneInformation(req, res) {  
        try {
            const { id } = req.params
            const results = await knex('medicamentodetalhes').where({IdMedicamentoDetalhe: id})
            return res.json(results)
        } catch (error) {
            return res.status(500).send();
        }
    },

    async create(req, res, next) {  
        try {
            const { IdMedicamento, Descricao, Dosagem, MedidaDose, IdVia } = req.body
            await knex('medicamentodetalhes')
            .insert({ IdMedicamento, Descricao, Dosagem, MedidaDose, IdVia });

            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { IdMedicamento } = req.body
            const { id } = req.params

            await knex('medicamentodetalhes')
            .update({ IdMedicamento, Descricao, Dosagem, MedidaDose, IdVia })
            .where({ IdMedicamentoDetalhe: id });

            return res.send();

        } catch (error) {            
            next(error);
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('medicamentodetalhes')
            .where({ IdMedicamentoDetalhe: id })
            .del();

            return res.send();

        } catch (error) {            
            next(error);
        }
    }
}
