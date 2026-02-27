const prisma = require("../data/prisma");
const clienteService = require("../services/clienteService");

async function createCliente(req, res) {
    try {
        const dados = req.body;

        const cliente = await clienteService.create(dados);

        return res.status(201).json(cliente);

    } catch (error) {
        return res.status(error.status || 500).json({
        message: error.message
        });
    }
}

const readClientes = async (req, res) => {
    const clientes = await prisma.clientes.findMany();

    res.json(clientes).status(200).end();
}

const readCliente = async (req, res) => {
    const { id } = req.params;
    
    const cliente = await prisma.clientes.findUnique({
        where: { id: Number(id) }
    })

    res.json(cliente).status(200).end();
}

const updateCliente = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    
    const cliente = await prisma.clientes.update({
        where: { id: Number(id) },
        data: dados
    })
    
    res.json(cliente).status(200).end();
}

const deleteCliente = async (req, res) => {
    const { id } = req.params;

    const cliente = await prisma.clientes.delete({
        where: { id: Number(id) }
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