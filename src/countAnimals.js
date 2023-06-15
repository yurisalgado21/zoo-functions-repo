const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const result = {};
  if (typeof animal === 'object' && animal.sex) {
    return data.species
      .filter((specie) => specie.name === animal.species)
      .map((specieSpecif) => specieSpecif.residents
        .filter((resident) => resident.sex === animal.sex))
      .flat().length;
  } if (typeof animal === 'object' && !animal.sex) {
    return data.species.filter((specie) => specie.name === animal.species)
      .map((specieSpecif) => specieSpecif.residents)
      .flat().length;
  }
  data.species.filter(({ name, residents }) => {
    result[name] = residents.length;
    return true;
  });
  return result;
};
console.log(countAnimals({ species: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
