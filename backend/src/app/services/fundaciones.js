const fundacionModel = require("../models/fundaciones");

const getFundaciones = async () => {
    try {
        const listAll = await fundacionModel.find({})
        return listAll;
    }
    catch (error) {
        throw new Error("Error al obtener todas las fundaciones: " + error.message);
    }
}

const getFundacionesPorEtiqueta = async (etiqueta) => {
    try {

        const fundaciones = await fundacionModel.find({
            tituloEtiquetas: { $in: etiqueta }
        });
        return fundaciones;
    } catch (error) {
        throw new Error("Error al obtener las fundaciones por etiqueta: " + error.message);
    }
}



module.exports = { getFundaciones, getFundacionesPorEtiqueta }

