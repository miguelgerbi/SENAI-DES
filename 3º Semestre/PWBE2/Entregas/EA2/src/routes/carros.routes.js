const express = require("express");

const router = express.Router();

const clienteController = require("../controllers/clientes.controller");

router.get("/clientes", clienteController.listarClientes);
router.post("/cliente", clienteController.cadastrarCliente)

module.exports = router;