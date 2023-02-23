const reverseString = function (string) {
  let returnString = "";
  for (let i = 0; i < string.length; i++) {
    returnString = returnString + string.charAt(string.length - 1 - i);
  }
  return returnString;
};

// Do not edit below this line
module.exports = reverseString;
