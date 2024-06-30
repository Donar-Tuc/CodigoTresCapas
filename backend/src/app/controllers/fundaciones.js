const { getFundaciones, getFundacionesPorEtiqueta } = require("../services/fundaciones");

const getFundacionesController = async (req, res, next) => {
    try {
        const listAll = await getFundaciones();
        res.status(200).send({ list: listAll })
    }
    catch (error) {
        next(error)
    }
}

const getFundacionesPorEtiquetaController = async (req, res, next) => {
    try {
        const etiqueta = req.query.etiqueta;
        const fundaciones = await getFundacionesPorEtiqueta(etiqueta);
        res.status(200).send({ list: fundaciones })
    }
    catch (error) {
        next(error)
    }
}

module.exports = { getFundacionesController, getFundacionesPorEtiquetaController }