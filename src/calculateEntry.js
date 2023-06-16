const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const result = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((person) => {
    if (person.age < 18) {
      result.child += 1;
    } else if (person.age >= 18 && person.age < 50) {
      result.adult += 1;
    } else {
      result.senior += 1;
    }
  });
  return result;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) return 0;
  const { child, adult, senior } = data.prices;
  const countPeoples = countEntrants(entrants);

  const priceMap = {
    child,
    adult,
    senior,
  };

  return Object.entries(countPeoples).reduce((sum, [key, value]) => {
    if (Object.prototype.hasOwnProperty.call(priceMap, key)) {
      return sum + priceMap[key] * value;
    }
    return sum;
  }, 0);
};
const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
// console.log(countEntrants(entrants));
console.log(calculateEntry(entrants));
module.exports = { calculateEntry, countEntrants };
