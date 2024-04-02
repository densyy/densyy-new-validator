/* ---- Required ---- */

const conditions = require('./conditions')

/* ---- Module ---- */

let ERRORS = []

const Validator = {
  validate: (rules, data) => {
    ERRORS = []
    data = sanitizeObjectProperties(data)
    validateFn(rules, data)
  },
  hasErrors: () => { return ERRORS.length > 0 },
  first: () => { return ERRORS[0] },
  errors: () => { return ERRORS }
}

/* ---- Aux Functions ---- */

function validateFn (rules, data) {
  for (const field in rules) {

    const props = rules[field].split('|')
    for (const prop of props) {

      const propValues = prop.split(':')
      const propName = propValues[0]
      checkConditions(propName, propValues, field, data)
      continue
    }
  }
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

function checkConditions (propName, propValues, field, data) {
  let error = ''
  switch (propName) {

    case 'required':
      error = conditions.required(field, data)
      if (error) ERRORS.push(error)
      break

    case 'number':
      error = conditions.number(field, data)
      if (error) ERRORS.push(error)
      break

    case 'string':
      error = conditions.string(field, data)
      if (error) ERRORS.push(error)
      break

    case 'min':
      error = conditions.min(field, data, propValues[1])
      if (error) ERRORS.push(error)
      break

    case 'max':
      error = conditions.max(field, data, propValues[1])
      if (error) ERRORS.push(error)
      break

    case 'minLength':
      error = conditions.minLength(field, data, propValues[1])
      if (error) ERRORS.push(error)
      break

    case 'maxLength':
      error = conditions.maxLength(field, data, propValues[1])
      if (error) ERRORS.push(error)
      break

    case 'date':
      error = conditions.date(field, data)
      if (error) ERRORS.push(error)
      break

    case 'email':
      error = conditions.email(field, data)
      if (error) ERRORS.push(error)
      break

    case 'array':
      error = conditions.array(field, data)
      if (error) ERRORS.push(error)
      break

    case 'hex':
      error = conditions.hex(field, data)
      if (error) ERRORS.push(error)
      break

    case 'mongoid':
      error = conditions.mongoid(field, data)
      if (error) ERRORS.push(error)
      break

    case 'size':
      error = conditions.size(field, data, propValues[1])
      if (error) ERRORS.push(error)
      break
  }
}

module.exports = Validator
