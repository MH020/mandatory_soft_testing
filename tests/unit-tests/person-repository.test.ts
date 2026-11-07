import { afterEach, describe, expect, it, jest, test } from '@jest/globals';
import { createRandomDateOfBirth, makeIntoIsodate } from '../../src/repository/person-repository.js';

const now = new Date();
const start = Date.UTC(1868, 0, 1);
const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
describe('random date of birth tests', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  
  it("returns the start date when math random is 0", () => {
    jest.spyOn(Math, "random").mockReturnValue(0);

    expect(createRandomDateOfBirth().getTime()).toBe(start);
  });


  it("returns the midpoint when math andom is 0.5", () => {
    jest.spyOn(Date, 'now').mockReturnValue(new Date(Date.UTC(2026, 11, 5)).getTime());
    jest.spyOn(Math, "random").mockReturnValue(0.5);

    const expected = new Date(Date.UTC(1947, 5, 19));
    expect(createRandomDateOfBirth().getTime()).toBe(expected.getTime());
  });

  it("returns a date near the upper limit", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.999999);

    const result = createRandomDateOfBirth();

    expect(result.getTime()).toBeGreaterThan(start);
  });

  it("returns a date near the upper limit", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.999999);

    const result = createRandomDateOfBirth();

    expect(result.getTime()).toBeLessThan(today);
  });
});

describe("makeIntoIsodate", () => {
  test("returns the date as a json birthdate field", () => {
    const date = new Date(Date.UTC(2000, 0, 2));

    expect(makeIntoIsodate(date)).toBe('{"birthdate":"2000-01-02"}');
  });

  test("remove time from from the output", () => {
    const date = new Date(Date.UTC(2000, 0, 2, 15, 30));

    const result = JSON.parse(makeIntoIsodate(date));

    expect(result).toEqual({ birthdate: "2000-01-02" });
  });

  test("panic for invalid date", () => {
    const invalidDate = new Date("fishstick");

    expect(() => makeIntoIsodate(invalidDate)).toThrow(RangeError);
  });
});