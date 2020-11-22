const express = require('express');

const UserController = require('./controllers/UserController');
const ProfissionalController = require('./controllers/ProfessionalController');
const ProtocolController = require('./controllers/ProtocolController');
const PrescriptionController = require('./controllers/PrescriptionController');
const PatientController = require('./controllers/PatientController');

const routes = express.Router();

//Usuários
routes.get('/usuarios', UserController.index);
routes.get('/usuarios/:id', UserController.onlyOneInformation);
routes.post('/usuarios', UserController.create);
routes.put('/usuarios/:id', UserController.update);
routes.delete('/usuarios/:id', UserController.delete);

//Profissionais
routes.get('/profissionais', ProfissionalController.index);
routes.get('/profissionais/:id', ProfissionalController.onlyOneInformation);
routes.post('/profissionais', ProfissionalController.create);
routes.put('/profissionais/:id', ProfissionalController.update);
routes.delete('/profissionais/:id', ProfissionalController.delete);

//Protocolos
routes.get('/protocolos', ProtocolController.index);
routes.get('/protocolos/:id', ProtocolController.onlyOneInformation);
routes.post('/protocolos', ProtocolController.create);
routes.put('/protocolos/:id', ProtocolController.update);
routes.delete('/protocolos/:id', ProtocolController.delete);

//Pacientes
routes.get('/pacientes', PatientController.index);
routes.get('/pacientes/:id', PatientController.onlyOneInformation);
routes.post('/pacientes', PatientController.create);
routes.put('/pacientes/:id', PatientController.update);
routes.delete('/pacientes/:id', PatientController.delete);

//Prescrição Médica
routes.get('/prescricao', PrescriptionController.index);
routes.get('/prescricao/:id', PrescriptionController.onlyOneInformation);
routes.post('/prescricao', PrescriptionController.create);
routes.put('/prescricao/:id', PrescriptionController.update);
routes.delete('/prescricao/:id', PrescriptionController.delete);

module.exports = routes;
