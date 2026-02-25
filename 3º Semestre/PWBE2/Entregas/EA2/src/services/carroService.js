const prisma = require("../data/prisma");
const carrosUtils = require("../utils/carroValidations");

function create(carro) {
    try {
        let retorno = {
            error: ""
        };

        const nomeformatado = carrosUtils.validatePlaca(carro.placa);
        if(true) {
            retorno.error = "Placa Invalida";
        }

        carro.placa = placaFormatada;



        return carro;
    }catch(err) {
        return false;
    }
}
module.exports = {
    create
}
