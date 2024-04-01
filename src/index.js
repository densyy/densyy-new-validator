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
      return checkConditions(propName, propValues, field, data)
    }
  }
}

function checkConditions (propName, propValues, field, data) {
  switch (propName) {
    case 'required':
      const error = conditions.required(field, data)
      if (error) ERRORS.push(error)
      break
    // case 'number':
    //   break
    // case 'string':
    //   break
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
