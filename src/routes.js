const express = require('express');

const UserController = require('./controllers/UserController');
const ProfissionalController = require('./controllers/ProfessionalController');
const ProtocolController = require('./controllers/ProtocolController');
const PrescriptionController = require('./controllers/PrescriptionController');
const PatientController = require('./controllers/PatientController');
const MedicineController = require('./controllers/MedicineController ');
const MedicinePresentationController = require('./controllers/MedicinePresentationController');
const AllergyController = require('./controllers/AllergyController');
const Specialityontroller = require('./controllers/SpecialtyController');

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
routes.delete('/prescricao/:id', PrescriptionController.delete);

//Medicamentos
routes.get('/medicamentos', MedicineController.index);
routes.get('/medicamentos/:id', MedicineController.onlyOneInformation);
routes.post('/medicamentos', MedicineController.create);
routes.put('/medicamentos/:id', MedicineController.update);
routes.delete('/medicamentos/:id', MedicineController.delete);

//Apresentação do Remédio
routes.get('/apresentacao', MedicinePresentationController.index);
routes.get('/apresentacao/:id', MedicinePresentationController.onlyOneInformation);
routes.post('/apresentacao', MedicinePresentationController.create);
routes.put('/apresentacao/:id', MedicinePresentationController.update);
routes.delete('/apresentacao/:id', MedicinePresentationController.delete);

//Alergias
routes.get('/alergias', AllergyController.index);
routes.get('/alergias/:id', AllergyController.onlyOneInformation);
routes.post('/alergias', AllergyController.create);
routes.put('/alergias/:id', AllergyController.update);
routes.delete('/alergias/:id', AllergyController.delete);
routes.delete('/alergias/:id', AllergyController.delete);

//Especialidade
routes.get('/especialidade/:id', Specialityontroller.onlyOneInformation);

module.exports = routes;
