function validatePlaca(placa) {
    if (!placa) {
        throwError("Placa é obrigatória.");
    }

    const cleaned = placa.trim().toUpperCase();

    if (cleaned.includes(" ")) {
        throwError("Placa não pode conter espaços.");
    }

    if (cleaned.length !== 7) {
        throwError("Placa deve ter 7 caracteres.");
    }

    return cleaned;
}

function formatarNome(value) {
  if (!value || !value.trim()) {
    throwError("Campo obrigatório.");
  }

  return value
    .trim()
    .split(" ")
    .filter(word => word !== "")
    .map(word =>
      word[0].toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
}

function validateAno(ano) {
    if (!ano || (ano+"").length !== 4) {
        throwError("Ano deve ter 4 dígitos.");
    }

    const hasLetter = (ano+"")
        .split("")
        .some(char => isNaN(char));

    if (hasLetter) {
        throwError("Ano deve conter apenas números.");
    }
}

function throwError(message) {
    const error = new Error(message);
    error.status = 400;
    throw error;
}

module.exports = {
    validatePlaca,
    formatarNome,
    validateAno
};