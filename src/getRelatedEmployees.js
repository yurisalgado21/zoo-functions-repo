const data = require('../data/zoo_data');

const isManager = (id) => data.employees
  .some((people) => people.managers
    .some((manager) => manager === id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managedEmployee = data.employees
    .filter((employee) => employee.managers.includes(managerId));
  return managedEmployee
    .map((employee) => `${employee.firstName} ${employee.lastName}`);
};

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
