const palindromes = function (string) {
  let stringMinusSpecChar = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (let i = 0; i < stringMinusSpecChar.length; i++) {
    if (
      stringMinusSpecChar.charAt(i) ==
      stringMinusSpecChar.charAt(stringMinusSpecChar.length - i - 1)
    )
      continue;
    else return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
