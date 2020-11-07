const express = require('express');

const UserController = require('./controllers/UserController');
const ProfissionalController = require('./controllers/ProfessionalController');
const PatientController = require('./controllers/PatientController');

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

//Pacientes
routes.get('/pacientes', PatientController.index);
routes.post('/pacientes', PatientController.create);
routes.put('/pacientes/:id', PatientController.update);
routes.delete('/pacientes/:id', PatientController.delete);

module.exports = routes;
