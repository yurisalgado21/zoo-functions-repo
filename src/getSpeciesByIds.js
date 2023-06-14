const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  if (!ids) return [];
  const arraySpecieSpecific = [];
  ids.forEach((id) => {
    arraySpecieSpecific.push(data.species.filter((specie) => specie.id === id));
  });
  return arraySpecieSpecific.flat();
};

module.exports = getSpeciesByIds;
