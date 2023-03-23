// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution function tests", () => {
  describe("error handling", () => {
    it("returns false if the substitution alphabet is missing", () => {
      const message = "random";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("returns false if the substitution alphabet is not 26 characters", () => {
      const message = "random";
      const alphabet = "smol";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("returns false if the substitution alphabet has even one character that is repeated", () => {
      const message = "random";
      const alphabet = "qpoqpoqpoqpoqpoqpoqpoqpoqp";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding", () => {
    it("encodes a message using the given substitution alphabet", () => {
      const message = "random";
      const alphabet = "18476wydghcnlkpozasf0!@#$%";
      const actual = substitution(message, alphabet);
      const expected = "a1k7pl";

      expect(actual).to.equal(expected);
    });

    it("works with any key that has unique characters", () => {
      const message = "squad";
      const alphabet = "18476wydghcnlkpozasf0!@#$%";
      const actual = substitution(message, alphabet);
      const expected = "sz017";

      expect(actual).to.equal(expected);
    });

    it("preserves spaces", () => {
      const message = "this is sparta";
      const alphabet = "18476wydghcnlkpozasf0!@#$%";
      const actual = substitution(message, alphabet);
      const expected = "fdgs gs so1af1";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding", () => {
    it("decodes a message using the given substitution alphabet", () => {
      const message = "764p767";
      const alphabet = "18476wydghcnlkpozasf0!@#$%";
      const actual = substitution(message, alphabet, false);
      const expected = "decoded";

      expect(actual).to.equal(expected);
    });

    it("works with any key that has unique characters", () => {
      const message = "17!6kf0a6";
      const alphabet = "18476wydghcnlkpozasf0!@#$%";
      const actual = substitution(message, alphabet, false);
      const expected = "adventure";

      expect(actual).to.equal(expected);
    });

    it("preserves spaces", () => {
      const message = "g 1l sp fga67";
      const alphabet = "18476wydghcnlkpozasf0!@#$%";
      const actual = substitution(message, alphabet, false);
      const expected = "i am so tired";

      expect(actual).to.equal(expected);
    });
  });
});