const { update } = require('../database/connection');
const knex = require('../database/connection');

module.exports = {    
    async index(req, res) {        
        const results = await knex('pacientes')
        return res.json(results)
    },

    async create(req, res, next) {  
        try {
            const { Nome, NomeSocial, Nascimento, Sexo, Documento, CPF, Endereco, Complemento, Bairro,
                    Cidade, UF, Cep, Fone, FoneCelular, Responsavel, FoneResponsavel, Naturalidade, Peso,
                    Altura, Superficie, created_at, updated_at, deleted_at } = req.body
            await knex('pacientes')
            .insert({ Nome, NomeSocial, Nascimento, Sexo, Documento, CPF, Endereco, Complemento, Bairro,
                      Cidade, UF, Cep, Fone, FoneCelular, Responsavel, FoneResponsavel, Naturalidade, Peso,
                      Altura, Superficie, created_at, updated_at, deleted_at });

            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { Nome, NomeSocial, Nascimento, Sexo, Documento, CPF, Endereco, Complemento, Bairro,
                    Cidade, UF, Cep, Fone, FoneCelular, Responsavel, FoneResponsavel, Naturalidade, Peso,
                    Altura, Superficie, created_at, updated_at, deleted_at } = req.body
            const { id } = req.params

            await knex('pacientes')
            .update({ Nome, NomeSocial, Nascimento, Sexo, Documento, CPF, Endereco, Complemento, Bairro,
                      Cidade, UF, Cep, Fone, FoneCelular, Responsavel, FoneResponsavel, Naturalidade, Peso,
                      Altura, Superficie, created_at, updated_at, deleted_at })
            .where({ IdPaciente: id });

            return res.send();

        } catch (error) {            
            next(error);
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('pacientes')
            .where({ IdPaciente: id })
            .del();

            return res.send();

        } catch (error) {            
            next(error);
        }
    }
}
