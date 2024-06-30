const express = require("express");
const router = express.Router();
const { getFundacionesPorEtiquetaController, getFundacionesController } = require("../controllers/fundaciones");

router.get("/", getFundacionesController);

router.get("/etiqueta", getFundacionesPorEtiquetaController);

module.exports = router;