const express = require("express");

const router = express.Router();

const carrosController = require("../controllers/carros.controller");

router.get("/carros/listar", carrosController.readCarros);
router.get("/carros/buscar/:id", carrosController.readCarro);
router.post("/carros/cadastrar", carrosController.createCarro);
router.put("/carros/atualizar", carrosController.updateCarro);
router.delete("/carros/delete", carrosController.deleteCarro);

module.exports = router;