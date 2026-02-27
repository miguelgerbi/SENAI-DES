const prisma = require("../data/prisma");
const carrosValidate = require("../utils/carroValidations");

async function create({ placa, marca, modelo, ano }) {
    const placaFormatada = carrosValidate.validatePlaca(placa);

    const placaDuplicata = await prisma.carros.findUnique({
        where: { placa: placaFormatada }
    });

    if (placaDuplicata) {
        const error = new Error("Placa já cadastrada.");
        error.status = 409;
        throw error;
    }

    const marcaFormatada = carrosValidate.formatarNome(marca);
    const modeloFormatado = carrosValidate.formatarNome(modelo);

    carrosValidate.validateAno(ano);

    const carro = await prisma.carros.create({
        data: {
            placa: placaFormatada,
            marca: marcaFormatada,
            modelo: modeloFormatado,
            ano
        }
    });

    return carro;
}

module.exports = {
    create
}
