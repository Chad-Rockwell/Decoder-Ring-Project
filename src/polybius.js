// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const decodeKey = {
    "11": "a",
    "21": "b",
    "31": "c",
    "41": "d",
    "51": "e",
    "12": "f",
    "22": "g",
    "32": "h",
    "42": "(i/j)",
    "52": "k",
    "13": "l",
    "23": "m",
    "33": "n",
    "43": "o",
    "53": "p",
    "14": "q",
    "24": "r",
    "34": "s",
    "44": "t",
    "54": "u",
    "15": "v",
    "25": "w",
    "35": "x",
    "45": "y",
    "55": "z",
  };
  const encodeKey = {
    "a": "11",
    "b": "21",
    "c": "31",
    "d": "41",
    "e": "51",
    "f": "12",
    "g": "22",
    "h": "32",
    "(i/j)": "42", 
    "k": "52",
    "l": "13",
    "m": "23",
    "n": "33",
    "o": "43",
    "p": "53",
    "q": "14",
    "r": "24",
    "s": "34",
    "t": "44",
    "u": "54",
    "v": "15",
    "w": "25",
    "x": "35",
    "y": "45",
    "z": "55",
  }

  function polytize(characters = []) {
    let response = "";
    for (let char of characters) {
      if (char === "i" || char === "j") {
        char = "(i/j)";
      }
      if (char === " ") response += char;
      for (let key in encodeKey) {
        if (key === char) {
          response += encodeKey[key];
        }
      }
    }
    return response;
  }
  function unpolytize(input = "" ){
    let response = "";
    for(let i = 0; i < input.length; i += 2) {
      const charPair = input.toLowerCase().slice(i, i + 2)
      if(charPair.includes(" ")) {
        i -=1;
        response += " ";
      } else {
        response += decodeKey[charPair];
      }

    }
    return response;
  }

  function polybius(input, encode = true) {
    // your solution code here
    if(!encode && input.split(" ").join("").length %2 !=0) return false;
    response = "";
    const characters = input.toLowerCase().split("");
    encode ? response = polytize(characters) : response = unpolytize(input);

    return response;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
