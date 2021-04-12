const positionEnum = {
  manager: 'manager',
  employee: 'employee',
};

const positionLevels = {
  manager: 50,
  employee: 10,
};

function ispositionHigher(position, minposition) {
  let level1 = positionLevels[position] || 0;
  let level2 = positionLevels[minposition] || 0;
  return level1 >= level2;
}

const positions = Object.values(positionEnum);

module.exports.positionEnum = positionEnum;
module.exports.positions = positions;
module.exports.positionLevels = positionLevels;
