const chance = require('chance').Chance()

let customerid = 0
const createCustomer = () => {
  customerid++
  return {
    id: customerid,
    firstname: chance.first(),
    lastname: chance.last(),
    birthday: chance.birthday({ string: true }),
    gender: chance.gender(),
    avatar: chance.avatar({ protocol: 'https', fileExtension: 'jpg' }),
  }
}

let companyid = 0
const createCompany = () => {
  companyid++
  return {
    id: companyid,
    companyName: chance.company(),
    email: chance.email(),
    website: chance.url(),
    tel: chance.phone(),
    address: chance.address(),
  }
}

chance.mixin({
  customerProfile: createCustomer,
  companyProfile: createCompany,
})

module.exports = {
  customers: (n) => chance.n(chance.customerProfile, n),
  companies: (n) => chance.n(chance.companyProfile, n),
}