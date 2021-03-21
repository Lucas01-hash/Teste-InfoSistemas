const { Router } = require("express");
const route = new Router();

// =>Controllers
const veiculoController = require("./app/controllers/veiculoController");

// => Middlewares
const verifyData = require("./app/middlewares/verifyData");

// => Rotas

/* rotas de crud */

/* => rota de Criação */
route.post("/veiculo", verifyData, veiculoController.store);

/* => rota de listagem total*/
route.get("/veiculos", veiculoController.show);

/* => rota de listagem total*/
route.get("/veiculo/:id", veiculoController.index);

/* => rota de delete */
route.delete("/veiculo/:id", veiculoController.delete);

/* => rota de atualização */
route.put("/veiculo/:id", verifyData, veiculoController.update);

module.exports = route;
