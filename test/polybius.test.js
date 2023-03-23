// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius tests", () => {
  describe("encoding", () => {
    it("encodes a message, translating each letter to number pairs", () => {
      const message = "drake";
      const actual = polybius(message);
      const expected = "4124115251";

      expect(actual).to.equal(expected);
    });

    it("translates 'i' and 'j' to 42", () => {
      const message = "juxtaposition";
      const actual = polybius(message);
      const expected = "42543544115343344244424333";

      expect(actual).to.equal(expected);
    });

    it("leaves spaces the same", () => {
      const message = "this part was hard to figure out";
      const actual = polybius(message);
      const expected = "44324234 53112444 251134 32112441 4443 124222542451 435444";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding", () => {
    it("decodes a message, translating each pair of numbers into a letter", () => {
      const message = "12134253535141";
      const actual = polybius(message, false);
      const expected = "fl(i/j)pped";

      expect(actual).to.equal(expected);
    });

    it("translates 42 to 'i' and 'j'", () => {
      const message = "42543544115343344244424333";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("leaves spaces the same", () => {
      const message = "44324234 251134 51155133 321124415124 4443 124222542451 435444";
      const actual = polybius(message, false);
      const expected = "th(i/j)s was even harder to f(i/j)gure out";

      expect(actual).to.equal(expected);
    });

    it("returns false if the length of all numbers is odd", () => {
      const message = "23456";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});