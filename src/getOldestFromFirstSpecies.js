const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employeSpecific = data.employees.find((employe) => employe.id === id);
  const firstAnimalsResponsivels = employeSpecific.responsibleFor[0];
  const animalOld = (idAnimal) => {
    const animal = data.species.find((specie) => specie.id === idAnimal);
    const animalResidentOld = animal.residents
      .reduce((acc, curr) => (curr.age > acc.age ? curr : acc));
    return Object.values(animalResidentOld);
  };
  return animalOld(firstAnimalsResponsivels);
};
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
