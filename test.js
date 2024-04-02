const Validator = require('./src/index')

const data = {
  nome: 'Wesley',
  idade: 30,
  dataRegistro: '2023-09-14T12:07:42.489Z',
  email: 'teste@teste.com',
  itens: ['a', 'b', 'c', 'd'],
  cor: 'FFFFFF',
  id: '6502f78eff780c4f9abc0390',
  'contato': {
    whatsapp: '99999999'
  },
  site: 'https://www.google.com',
  positivo: false
}

const rules = {
  nome: 'required|string|minLength:1|maxLength:100',
  idade: 'required|number|min:25|max:35',
  dataRegistro: 'required|date',
  email: 'required|email',
  itens: 'array|size:4',
  cor: 'hex',
  id: 'mongoid',
  'contato.whatsapp': 'required|string|minLength:5|maxLength:15',
  site: 'url',
  positivo: 'boolean'
}

Validator.validate(rules, data)
console.log(Validator.errors())


