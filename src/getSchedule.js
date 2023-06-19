const data = require('../data/zoo_data');

const daysZoo = (stringDay) => {
  const result = {};
  const { hours, species } = data;
  Object.keys(hours).forEach((key) => {
    result[key] = { officeHour: `Open from ${hours[key].open}am until ${hours[key].close}pm`,
      exhibition: [] };
    species.forEach((specie) => {
      if (specie.availability.includes(key)) {
        result[key].exhibition.push(specie.name);
      }
    });
  });
  result.Monday.officeHour = 'CLOSED';
  result.Monday.exhibition = 'The zoo will be closed!';
  if (!stringDay) {
    return result;
  }
  return { [stringDay]: result[stringDay] };
};

const getSchedule = (scheduleTarget) => {
  const daySpecific = Object.keys(data.hours).find((day) => day === scheduleTarget);
  const weekDaysSpecie = data.species.find((specie) => specie.name === scheduleTarget);
  
  if (!scheduleTarget || (!daySpecific && !weekDaysSpecie)) {
    return daysZoo();
  } 
  
  if (scheduleTarget === 'Monday') {
    return daysZoo('Monday');
  }

  return daySpecific ? daysZoo(daySpecific) : weekDaysSpecie.availability;
};

module.exports = getSchedule;
