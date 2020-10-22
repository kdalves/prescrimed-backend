const express = require('express');

const UserController = require('./controllers/UserController');
const ProfissionalController = require('./controllers/ProfessionalController');

const routes = express.Router();

//Usuários
routes.get('/usuarios', UserController.index);
// routes.post('/usuarios', UserController.create);

//Profissionais
routes.get('/profissionais', ProfissionalController.index);

module.exports = routes;