/* ---- Required ---- */

const messages = require('./messages')

/* ---- Methods ---- */

function required (field, data) {
  if (data.hasOwnProperty(field) && data[field] !== '') return false
  return messages.required(field)
}

module.exports = {
  required
}
