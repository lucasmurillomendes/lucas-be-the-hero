//Importando cors
const cors = require('cors');
//Importando as funcionalidades do express instalado
const express = require('express');
//Importando as rotas
const routes = require('./routes');
//criando variável que armazena a minha apolicação, criando ela.
const app = express();
//Usando cors
app.use(cors());
//Informa que vamos usar JSON
app.use(express.json());
//Usando rotas
app.use(routes);
//Aplicação ouve a porta 3333
app.listen(3333);




