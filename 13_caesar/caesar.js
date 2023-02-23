const caesar = function(string, shift) {
  if(shift > 26 || shift < -26){
    shift = shift % 26;
  }
  let asciiCode = [];
  for(let i = 0; i < string.length; i++){
    asciiCode[i] = string.charCodeAt(i);  // char to ascii code
    
    // checks for special characters
    if((asciiCode[i] > 90 && asciiCode[i] < 97) || asciiCode[i] > 122 || asciiCode[i] < 65){
      asciiCode[i] = String.fromCharCode(asciiCode[i]);  // ascii code to char
      continue;
    }
    else{
      // capital letters
      if(asciiCode[i] <= 90){
        if(asciiCode[i] + shift > 90){
          asciiCode[i] = asciiCode[i] - (26 - shift);
        }
        else if(asciiCode[i] + shift < 65){
          asciiCode[i] = asciiCode[i] + (26 + shift);
        }
        else asciiCode[i] = asciiCode[i] + shift;
      }
      // small letters
      else{
        if(asciiCode[i] + shift > 122){
          asciiCode[i] = asciiCode[i] - (26 - shift);
        }
        else if(asciiCode[i] + shift < 97){
          asciiCode[i] = asciiCode[i] + (26 + shift);
        }
        else asciiCode[i] = asciiCode[i] + shift;
      }

      asciiCode[i] = String.fromCharCode(asciiCode[i]);  // ascii code to char
    }

  }

  let returnString = asciiCode.join('');
  return returnString;
};

// Do not edit below this line
module.exports = caesar;
