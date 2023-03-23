// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let originalAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function keyValidator(alphabet) {
    let charCount = 0;
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          charCount++;
        }
      }
    }
    if (charCount > 26) return true;
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26 || keyValidator(alphabet))
      return false;
    let result = "";
    let charNum = 0;
    for (let i = 0; i < input.length; i++) {
      if (encode) {
        charNum = originalAlphabet.indexOf(input[i]);
        charNum !== -1 ? (result += alphabet[charNum]) : (result += input[i]);
      } else {
        charNum = alphabet.indexOf(input[i]);
        charNum !== -1
          ? (result += originalAlphabet[charNum])
          : (result += input[i]);
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
