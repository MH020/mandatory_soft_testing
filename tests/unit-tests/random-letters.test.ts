import { afterEach, describe, expect, it, jest } from '@jest/globals';
import { randomLetters } from '../../src/service/address-service.js';



describe("randomLetters", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

    it("returns the requested number of letters", () => {
        expect(randomLetters(5)).toHaveLength(5);
    });

    it("only return letters from my keyboard", () => {
        const letters = "qwertyuiopåøælkjhgfdsazxcvbnm";

        expect([...randomLetters(20)].every(letter => letters.includes(letter)))
        .toBe(true);
    });

    it("returns an empty string when length is 0", () => {
        expect(randomLetters(0)).toBe("");
    });

    it("uses Math random to choose letters", () => {
        jest.spyOn(Math, "random").mockReturnValue(0);

        expect(randomLetters(3)).toBe("qqq");
    });

});