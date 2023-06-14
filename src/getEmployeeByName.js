const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  return data.employees
    .find((person) => (person.firstName === employeeName || person.lastName === employeeName));
};
console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
