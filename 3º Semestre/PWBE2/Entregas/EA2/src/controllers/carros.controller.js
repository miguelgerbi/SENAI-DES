const prisma = require("../data/prisma");
const carroService = require("../services/carroService");

const createCarro = async (req, res) => {
    const dados = req.body;

    const carro = await carroService.create(dados);

    res.json(carro).end();
}

const readCarros = async (req, res) => {
    const carros = await prisma.carros.findMany();

    res.json(carros).status(200).end();
}

const readCarro = async (req, res) => {
    const { id } = req.params;
    
    const carro = await prisma.carros.findUnique({
        where: { id }
    })

    res.json(carro).status(200).end();
}

const updateCarro = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    
    const carro = await prisma.carros.update({
        where: { id },
        data: dados
    })
    
    res.json(carro).status(200).end();
}

const deleteCarro = async (req, res) => {
    const { id } = req.params;

    const carro = await prisma.carros.delete({
        where: { id }
    })

    res.json(carro).status(200).end();
}

module.exports = {
    createCarro,
    readCarros,
    readCarro,
    updateCarro,
    deleteCarro
}


