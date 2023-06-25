const data = require('../data/zoo_data');

const informationPerson = (namePerson) => {
  const result = { id: '', fullName: '', species: [], locations: [] };
  const findSpeciesById = (speciesId) => {
    const species = data.species.find((specie) => specie.id === speciesId);
    if (species) {
      result.species.push(species.name);
      result.locations.push(species.location);
    }
  };
  data.employees.forEach((person) => {
    if (person.firstName === namePerson.firstName) {
      result.id = person.id;
      result.fullName = `${person.firstName} ${person.lastName}`;
      person.responsibleFor.forEach(findSpeciesById);
    }
  });
  return result;
};

const informationEveryPerson = () => data.employees
  .map((employee) => ({ id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor
      .map((speciesId) => {
        const species = data.species.find((specie) => specie.id === speciesId);
        if (species) {
          return species.name;
        }
        return null;
      }),
    locations: employee.responsibleFor
      .map((speciesId) => {
        const species = data.species.find((specie) => specie.id === speciesId);
        if (species) {
          return species.location;
        }
        return null;
      }) }));

const getEmployeesCoverage = (objPerson) => {
  if (!objPerson) {
    return informationEveryPerson();
  }
  const namePerson = data.employees
    .find((person) => person.firstName === objPerson.name || person.lastName === objPerson.name);
  const idPerson = data.employees.find((person) => person.id === objPerson.id);
  if (namePerson) {
    return informationPerson(namePerson);
  } if (idPerson) {
    return informationPerson(idPerson);
  }
  throw new Error('Informações inválidas');
};

console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
