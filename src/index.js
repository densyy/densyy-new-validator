/* ---- Required ---- */

const helpers = require('./helpers')

/* ---- Module ---- */

let ERRORS = []

const Validator = {
  validate: (rules, data) => {
    ERRORS = []
    data = helpers.sanitizeObjectProperties(data)
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
      const error = helpers.checkConditions(propName, propValues, field, data)
      if (error) ERRORS.push(error)
    }
  }
}

module.exports = Validator
