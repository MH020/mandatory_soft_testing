import { afterEach, describe, expect, test } from '@jest/globals';
import { makeIntoIsodate } from '../../src/repository/person-repository.js';

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