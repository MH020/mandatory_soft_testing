import { afterEach, describe, expect, it, jest } from '@jest/globals';
import { randomLetters } from '../../src/repository/addresse-repository.js';


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

});