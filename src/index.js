/* ---- Required ---- */

const conditions = require('./conditions')

/* ---- Module ---- */

let ERRORS = []

const Validator = {
  validate: (rules, data) => {
    ERRORS = []
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

    // case 'date':
    //   break
    // case 'min':
    //   break
    // case 'max':
    //   break
    // case 'minLength':
    //   break
    // case 'maxLength':
    //   break
    // case 'email':
    //   break
  }
}

module.exports = Validator
