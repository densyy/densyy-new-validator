/* ---- Methods ---- */

const Messages = {
  required: (field) => `O campo ${field} é obrigatório.`,
  number: (field) => `O campo ${field} deve ser um número.`,
  string: (field) => `O campo ${field} deve ser uma string.`,
  boolean: (field) => `O campo ${field} deve ser um boleano.`,
  date: (field) => `O campo ${field} deve ser uma data válida.`,
  array: (field) => `O campo ${field} deve ser uma array.`,
  min: (field, min) => `O campo ${field} deve ser no mínimo ${min}.`,
  max: (field, max) => `O campo ${field} deve ser no máximo ${max}.`,
  minLength: (field, min) => `O campo ${field} deve ter no mínimo ${min} caracteres.`,
  maxLength: (field, max) => `O campo ${field} deve ter no máximo ${max} caracteres.`,
  size: (field, size) => `O campo ${field} deve conter ${size} elementos.`,
  email: (field) => `O campo ${field} deve ser um email válido.`,
  url: (field) => `O campo ${field} deve ser uma url válida.`,
  hex: (field) => `O campo ${field} deve ser um valor em hexadecimal.`,
  mongoid: (field) => `O campo ${field} deve ser um id válido.`
}

module.exports = Messages
