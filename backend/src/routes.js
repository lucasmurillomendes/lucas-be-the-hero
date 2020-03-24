const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const connection = require('./database/connection');

const routes = express.Router();

/**
 * Tipos de parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */

//Rota de select de ongs
routes.get('/ongs', OngController.index);
//Rota de insert de ongs
routes.post('/ongs', OngController.create);

//Rota de select de casos
routes.get('/incidents', IncidentController.index);
//Rota de insert de casos
routes.post('/incidents', IncidentController.create);
//Rota de delete de casos
routes.delete('/incidents/:id', IncidentController.delete);

//Rota seleção de caso por ong
routes.get('/profile', ProfileController.index);

//Rota de Login
routes.post('/sessions', SessionController.create);

module.exports = routes;