const add = function (num1, num2) {
  let sum = 0;
  sum = num1 + num2;
  return sum;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function (arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

const power = function (number, power) {
  let product = 1;
  for (let i = 0; i < power; i++) {
    product *= number;
  }
  return product;
};

const factorial = function (number) {
  if (number == 0) return 1;
  if (number == 1) return 1;
  else {
    return number * factorial(number - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
