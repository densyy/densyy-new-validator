/* ---- Required ---- */

const messages = require('./messages')

/* ---- Methods ---- */

function required (field, data) {
  if (data.hasOwnProperty(field) && data[field] !== '') return false
  return messages.required(field)
}

function number (field, data) {
  if (typeof data[field] === 'number') return false
  return messages.number(field)
}

function string (field, data) {
  if (typeof data[field] === 'string') return false
  return messages.string(field)
}

module.exports = {
  required,
  number,
  string
}
