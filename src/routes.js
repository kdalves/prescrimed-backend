const express = require('express');

const ExampleController = require('./controllers/example');

const routes = express.Router();

// auth
routes.get('/auth', ExampleController.login);

module.exports = routes;