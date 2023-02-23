const repeatString = function (string, times) {
  if (times < 0) {
    return "ERROR";
  } else {
    let returnString = "";
    for (let i = 0; i < times; i++) {
      returnString += string;
    }
    return returnString;
  }
};
repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
