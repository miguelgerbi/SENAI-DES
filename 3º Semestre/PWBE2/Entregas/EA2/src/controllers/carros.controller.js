const prisma = require("../data/prisma");
const carroService = require("../services/carroService");

const createCarro = async (req, res) => {
    try {
        const dados = req.body;
        
        const carro = await carroService.create(dados);

        return res.status(201).json(carro);

    } catch (error) {
        return res.status(error.status || 500).json({
            message: error.message
        });
    }
}

const readCarros = async (req, res) => {
    const carros = await prisma.carros.findMany();

    res.json(carros).status(200).end();
}

const readCarro = async (req, res) => {
    const { id } = req.params;
    
    const carro = await prisma.carros.findUnique({
        where: { id: Number(id) }
    })

    res.json(carro).status(200).end();
}

const updateCarro = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    
    const carro = await prisma.carros.update({
        where: { id: Number(id) },
        data: dados
    })
    
    res.json(carro).status(200).end();
}

const deleteCarro = async (req, res) => {
    const { id } = req.params;

    const carro = await prisma.carros.delete({
        where: { id: Number(id) }
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


