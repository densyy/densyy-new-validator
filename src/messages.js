/* ---- Methods ---- */

const Messages = {
  required: (field) => `O campo ${field} é obrigatório.`,
  number: (field) => `O campo ${field} deve ser um número.`,
  string: (field) => `O campo ${field} deve ser uma string.`,
  min: (field, min) => `O campo ${field} deve ser no mínimo ${min}.`,
  max: (field, max) => `O campo ${field} deve ser no máximo ${max}.`,
  minLength: (field, min) => `O campo ${field} deve ter no mínimo ${min} caracteres.`,
  maxLength: (field, max) => `O campo ${field} deve ter no máximo ${max} caracteres.`,
  date: (field) => `O campo ${field} deve ser uma data válida.`,
  email: (field) => `O campo ${field} deve ser um email válido.`,
  array: (field) => `O campo ${field} deve ser uma array.`,
  hex: (field) => `O campo ${field} deve ser um valor em hexadecimal.`,
  mongoid: (field) => `O campo ${field} deve ser um id válido.`,
  size: (field, size) => `O campo ${field} deve conter ${size} elementos.`,
}

module.exports = Messages
