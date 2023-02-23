const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0) return "ERROR";
  if (typeof num1 === "number" && typeof num2 === "number") {
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    let sum = 0;
    for (min; min <= max; min++) {
      sum += min;
    }
    return sum;
  } else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
