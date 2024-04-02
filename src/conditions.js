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

function min (field, data, min) {
  if (data[field] < min) return messages.min(field, min)
  return false
}

function max (field, data, max) {
  if (data[field] > max) return messages.max(field, max)
  return false
}

function minLength (field, data, min) {
  if (data[field]?.length < min) return messages.minLength(field, min)
  return false
}

function maxLength (field, data, max) {
  if (data[field]?.length > max) return messages.maxLength(field, max)
  return false
}

function date (field, data) {
  const dateObject = new Date(data[field])
  if (!isNaN(dateObject?.getTime())) return false
  return messages.date(field)
}

function email (field, data) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (regex.test(data[field])) return false
  return messages.email(field)
}

function array (field, data) {
  if (Array.isArray(data[field])) return false
  return messages.array(field)
}

function hex (field, data) {
  const regex = /^[0-9a-fA-F]+$/;
  if (regex.test(data[field])) return false
  return messages.hex(field)
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
  hex
}
