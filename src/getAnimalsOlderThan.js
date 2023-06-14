const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species
  .find((specie) => specie.name === animal).residents
  .every((myAnimal) => myAnimal.age >= age);

console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
