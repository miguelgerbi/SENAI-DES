function validateFullName(nome) {
    if (!nome || !nome.trim()) {
        throwError("Nome completo é obrigatório.");
    }

    const trimmed = nome.trim();

    const words = trimmed
        .split(" ")
        .filter(word => word !== "");

    if (words.length < 2) {
        throwError("Nome deve conter pelo menos duas palavras.");
    }

    const contemNumero = /\d/.test(trimmed);

    if (contemNumero) {
        throwError("Nome não pode conter números.");
    }

    return words.join(" ");
}

function validateCPF(cpf) {
    if (!cpf) {
        throwError("CPF é obrigatório.");
    }

    const cleaned = cpf.replace(/\D/g, "");

    if (cleaned.length !== 11) {
        throwError("CPF deve conter 11 dígitos.");
    }

    return cleaned;
}

function validateEmail(email) {
    if (!email) {
        throwError("Email é obrigatório.");
    }

    const formatado = email.toLowerCase();

    if (!formatado.includes("@") || !formatado.includes(".")) {
        throwError("Email inválido.");
    }

    return formatado;
}

function validateCNH(cnh) {
    if (!cnh) {
        throwError("CNH é obrigatória.");
    }

    const chars = cnh.split("");

    if (isNaN(chars[0])) {
        throwError("CNH deve começar com número.");
    }
}

function throwError(message) {
    const error = new Error(message);
    error.status = 400;
    throw error;
}

module.exports = {
    validateFullName,
    validateCPF,
    validateEmail,
    validateCNH
};