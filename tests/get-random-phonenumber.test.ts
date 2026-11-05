import { afterEach, describe, expect, it, jest } from '@jest/globals';
import { getRandomPhoneNumber } from '../src/service/person-service.js';


describe("get_random_phone_number", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns a phone number starting with the first allowed prefix (2)", () => {
    jest.spyOn(Math, "random").mockReturnValue(0);
    const num = getRandomPhoneNumber();
    expect(Math.floor(num / 10_000_000)).toBe(2);
  });
  
  it("returns a phone number starting with the last allowed prefix (829)", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.9999);
    const num = getRandomPhoneNumber();
    expect(Math.floor(num / 100_000)).toBe(829);
  });
  
  it("A phonenumber should always start be 8 digits", () => {
    const num = getRandomPhoneNumber();
    expect(num.toString().length).toBe(8);
  });
});


