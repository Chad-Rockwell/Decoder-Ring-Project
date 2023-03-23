// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar function", () => {
  describe("edge cases/error handling", () => {
    it("returns false if shift is 0", () => {
      const message = "my milkshake brings all the boys to the yard";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("returns false if shift is over 25", () => {
      const message = "and they're like";
      const shift = 28;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("returns false if shift is less than -25", () => {
      const message = "it's better than yours";
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });

  describe("encoding", () => {
    it("encodes a message by shifting its letters", () => {
      const message = "right";
      const shift = -4;
      const actual = caesar(message, shift);
      const expected = "necdp";

      expect(actual).to.equal(expected);
    });

    it("leaves spaces and other symbols the same", () => {
      const message = "it's better than yours";
      const shift = 10;
      const actual = caesar(message, shift);
      const expected = "sd'c loddob drkx iyebc";

      expect(actual).to.equal(expected);
    });

    it("ignores capital letters", () => {
      const message = "i CaN tEaCh yoU";
      const shift = 5;
      const actual = caesar(message, shift);
      const expected = "n hfs yjfhm dtz";

      expect(actual).to.equal(expected);
    });

    it("handles letters at the end of the alphabet correctly", () => {
      const message = "but I haz to charge";
      const shift = 6;
      const actual = caesar(message, shift);
      const expected = "haz o ngf zu ingxmk";

      expect(actual).to.equal(expected);
    });

    it("allows negative shifts that shift to the left", () => {
      const message = "I know you want it";
      const shift = -6;
      const actual = caesar(message, shift);
      const expected = "c ehiq sio quhn cn";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding", () => {
    it("decodes a message by shifting its letters in the opposite direction", () => {
      const message = "ymj";
      const shift = 5;
      const actual = caesar(message, shift, false);
      const expected = "the";

      expect(actual).to.equal(expected);
    });

    it("leaves spaces and other symbols the same", () => {
      const message = "ymnsl ymfy rfpjx rj...";
      const shift = 5;
      const actual = caesar(message, shift, false);
      const expected = "thing that makes me...";

      expect(actual).to.equal(expected);
    });

    it("ignores capital letters", () => {
      const message = "l Dp vR kxqJuB UljKw Qrz";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "i am so hungry right now";

      expect(actual).to.equal(expected);
    });

    it("handle letters at the end of the alphabet correctly", () => {
      const message = "inumj rb cqn knbc wrwcnwmx oajwlqrbn";
      const shift = 9;
      const actual = caesar(message, shift, false);
      const expected = "zelda is the best nintendo franchise";

      expect(actual).to.equal(expected);
    });

    it("allows negative shifts", () => {
      const message = "c ujjlywcuny sio nuecha nby ncgy ni aluxy nbcm <3";
      const shift = -6;
      const actual = caesar(message, shift, false);
      const expected = "i appreciate you taking the time to grade this <3";

      expect(actual).to.equal(expected);
    });
  });
});
