const fibonacci = function (sequence) {
  if (sequence < 1) {
    return "OOPS";
  } else {
    if (sequence == 1) return 1;
    if (sequence == 2) return 1;
    else return fibonacci(sequence - 1) + fibonacci(sequence - 2);
  }
};

// Do not edit below this line
module.exports = fibonacci;
