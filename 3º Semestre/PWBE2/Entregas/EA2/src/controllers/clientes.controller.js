const prisma = require("../data/prisma");
const clienteService = require("../services/clienteService");

const createCliente = async (req, res) => {
    const dados = req.body;

    const cliente = await clienteService.create({
        data: dados
    });

    res.json(cliente).status(201).end();
}

const readClientes = async (req, res) => {
    const clientes = await prisma.clientes.findMany();

    res.json(clientes).status(200).end();
}

const readCliente = async (req, res) => {
    const { id } = req.params;
    
    const cliente = await prisma.clientes.findUnique({
        where: { id }
    })

    res.json(cliente).status(200).end();
}

const updateCliente = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    
    const cliente = await prisma.clientes.update({
        where: { id },
        data: dados
    })
    
    res.json(cliente).status(200).end();
}

const deleteCliente = async (req, res) => {
    const { id } = req.params;

    const cliente = await prisma.clientes.delete({
        where: { id }
    })

    res.json(cliente).status(200).end();
}

module.exports = {
    createCliente,
    readClientes,
    readCliente,
    updateCliente,
    deleteCliente
}