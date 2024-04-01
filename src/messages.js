/* ---- Methods ---- */

function required (field) {
  return `O campo ${field} é obrigatório.`
}

function number (field) {
  return `O campo ${field} deve ser um número.`
}

function string (field) {
  return `O campo ${field} deve ser uma string.`
}

function min (field, min) {
  return `O campo ${field} deve ser no mínimo ${min}.`
}

function max (field, max) {
  return `O campo ${field} deve ser no máximo ${max}.`
}

function minLength (field, min) {
  return `O campo ${field} deve ter no mínimo ${min} caracteres.`
}

function maxLength (field, max) {
  return `O campo ${field} deve ter no máximo ${max} caracteres.`
}

module.exports = {
  required,
  number,
  string,
  min,
  max,
  minLength,
  maxLength
}
