const prisma = require("../data/prisma");
const clientesValidate = require("../utils/clienteValidations");

async function create({ nome, cpf, email, cnh }) {

    const nomeFormatado = clientesValidate.validateFullName(nome);

    const cpfFormatado = clientesValidate.validateCPF(cpf);

    const emailFormatado = clientesValidate.validateEmail(email);

    const clientes = await prisma.clientes.findMany();

    const emailDuplicata = clientes.some(
        client => client.email === formatarEmail
    );

    if (emailDuplicata) {
        const error = new Error("Email já cadastrado.");
        error.status = 409;
        throw error;
    }

    clientesValidate.validateCNH(cnh);

    const cliente = await prisma.clientes.create({
        data: {
        nome: nomeFormatado,
        cpf: cpfFormatado,
        email: emailFormatado,
        cnh
        }
    });

    return cliente;
}

module.exports = {
    create
};