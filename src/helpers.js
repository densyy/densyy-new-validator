/* ---- Requires ---- */

const conditions = require('./conditions')

/* ---- Methods ---- */

function checkConditions (propName, propValues, field, data) {
  if (propName === 'required') return conditions.required(field, data)
  if (propName === 'number') return conditions.number(field, data)
  if (propName === 'string') return conditions.string(field, data)
  if (propName === 'boolean') return conditions.boolean(field, data)
  if (propName === 'date') return conditions.date(field, data)
  if (propName === 'array') return conditions.array(field, data)
  if (propName === 'min') return conditions.min(field, data, propValues[1])
  if (propName === 'max') return conditions.max(field, data, propValues[1])
  if (propName === 'minLength') return conditions.minLength(field, data, propValues[1])
  if (propName === 'maxLength') return conditions.maxLength(field, data, propValues[1])
  if (propName === 'size') return conditions.size(field, data, propValues[1])
  if (propName === 'email') return conditions.email(field, data)
  if (propName === 'hex') return conditions.hex(field, data)
  if (propName === 'mongoid') return conditions.mongoid(field, data)
}

function sanitizeObjectProperties (obj, prefix = '') {
  const reducer = (acc, key) => {
    const newKey = prefix ? `${prefix}.${key}` : key
    const isObject = typeof obj[key] === 'object'
    const isArray = Array.isArray(obj[key])

    if (!isObject || isArray) acc[newKey] = obj[key]
    else Object.assign(acc, sanitizeObjectProperties(obj[key], newKey))
    return acc
  }

  return Object
    .keys(obj)
    .reduce(reducer, {})
}

module.exports = {
  checkConditions,
  sanitizeObjectProperties
}
