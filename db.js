const generator = require('./generator')

module.exports = () => ({
  customers: generator.customers(50),
  companies: generator.companies(50),
})