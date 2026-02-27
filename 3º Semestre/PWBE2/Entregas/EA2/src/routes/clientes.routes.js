const express = require("express");

const router = express.Router();

const clientesController = require("../controllers/clientes.controller");

router.get("/clientes/listar", clientesController.readClientes);
router.get("/clientes/buscar/:id", clientesController.readCliente)
router.post("/clientes/cadastrar", clientesController.createCliente);
router.put("/clintes/atualizar/:id", clientesController.updateCliente);
router.delete("/clientes/excluir/:id", clientesController.deleteCliente);

module.exports = router;