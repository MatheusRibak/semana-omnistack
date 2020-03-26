//NODE INDEX.JS RODA O SERVIDOR. 

const express = require('express');

const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */


/**
 *  Métodos HTTP:
 * 
 * GET: BUSCAR UMA INFORMAÇÃO DO BACK-END
 * POST: CRIAR UMA INFORMAÇÃO NO BACK-END
 * PUT: ALTERAR UMA INFORMAÇÃO NO BACK-END
 * DELETE: DELETAR UMA INFORMAÇÃO NO BACK-END
 */

 /**
  * TIPOS DE PARÂMETROS:
  * 
  * QUERY: PARÂMETROS NOMEADOS ENVIADOS NA ROTA APÓS "?" (FILTROS, PAGINAÇÃO)
  * ROUTE PARMS: PARÂMETROS UTILIZADOS PARA IDENTIFICAR RECURSOS
  * REQUEST BODY: CORPO DA REQUISIÇÃO, UTILIZADO PARA CRIAR OU ALTERAR RECURSOS
  */


app.listen(3333);
