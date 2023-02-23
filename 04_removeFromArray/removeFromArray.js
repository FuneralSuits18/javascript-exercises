const removeFromArray = function (array, ...args) {
  for (arg of args) {
    const index = array.indexOf(arg);
    if (index >= 0) {
      array.splice(index, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
