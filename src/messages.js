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

function date (field) {
  return `O campo ${field} deve ser uma data válida.`
}

function email (field) {
  return `O campo ${field} deve ser um email válido.`
}

function array (field) {
  return `O campo ${field} deve ser uma array.`
}

function hex (field) {
  return `O campo ${field} deve ser um valor em hexadecimal.`
}

function mongoid (field) {
  return `O campo ${field} deve ser um id válido.`
}

function size (field, size) {
  return `O campo ${field} deve conter ${size} elementos.`
}

module.exports = {
  required,
  number,
  string,
  min,
  max,
  minLength,
  maxLength,
  date,
  email,
  array,
  hex,
  mongoid,
  size
}
