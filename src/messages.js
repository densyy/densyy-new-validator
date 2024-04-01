/* ---- Methods ---- */

function required (field) {
  return `O campo ${field} é obrigatório.`
}

function number (field) {
  return `O campo ${field} deve ser um número.`
}

function string (field) {
  return `O campo ${field} deve ser uma string`
}

module.exports = {
  required,
  number,
  string
}
