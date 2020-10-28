const express = require('express');

const UserController = require('./controllers/UserController');
const ProfissionalController = require('./controllers/ProfessionalController');
const ProtocolController = require('./controllers/ProtocolController');

const routes = express.Router();

//Usuários
routes.get('/usuarios', UserController.index);
routes.post('/usuarios', UserController.create);
routes.put('/usuarios/:id', UserController.update);
routes.delete('/usuarios/:id', UserController.delete);

//Profissionais
routes.get('/profissionais', ProfissionalController.index);
routes.post('/profissionais', ProfissionalController.create);
routes.put('/profissionais/:id', ProfissionalController.update);
routes.delete('/profissionais/:id', ProfissionalController.delete);

//Protocolos
routes.get('/protocolos', ProtocolController.index);
routes.post('/protocolos', ProtocolController.create);
routes.put('/protocolos/:id', ProtocolController.update);
routes.delete('/protocolos/:id', ProtocolController.delete);

module.exports = routes;
