const express = require('express');

const UserController = require('./controllers/UserController');
const ProfissionalController = require('./controllers/ProfessionalController');
const PrescriptionController = require('./controllers/PrescriptionController');

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

//Prescrição Médica
routes.get('/prescricao', PrescriptionController.index);
routes.post('/prescricao', PrescriptionController.create);
routes.put('/prescricao/:id', PrescriptionController.update);
routes.delete('/prescricao/:id', PrescriptionController.delete);

module.exports = routes;
