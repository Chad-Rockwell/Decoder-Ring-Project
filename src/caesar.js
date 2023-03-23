// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  
  

  function caesar(input, shift, encode = true) {
    // your solution code here
    let shiftedMessage = "";
    let charNum = 0;
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
    const characters = input.toLowerCase().split("");
    for (let char of characters) {
      charNum = alphabet.indexOf(char);
      let newShift = 0;
      encode ? newShift = charNum + shift : newShift = charNum - shift;
      if((newShift) > 25) newShift = (newShift) - 26;
      else if((newShift) < 0) newShift = (newShift) + 26;
        charNum !== -1
          ? (shiftedMessage += alphabet[newShift])
          : (shiftedMessage += char);
      
    }
    return shiftedMessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
