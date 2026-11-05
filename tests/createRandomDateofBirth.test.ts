import { afterEach, describe, expect, it, jest, test } from '@jest/globals';
import { createRandomDateOfBirth } from '../src/repository/person-repository.js';

  const now = new Date();
  const start = Date.UTC(1868, 0, 1);
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());

afterEach(() => {
  jest.restoreAllMocks();
});

test("returns the start date when math random is 0", () => {
  jest.spyOn(Math, "random").mockReturnValue(0);

  expect(createRandomDateOfBirth().getTime()).toBe(start);
});


test("returns the midpoint when math andom is 0.5", () => {
  jest.spyOn(Math, "random").mockReturnValue(0.5);

  const expected = new Date(start + (today - start) * 0.5);

  expect(createRandomDateOfBirth().getTime()).toBe(expected.getTime());
});

test("returns a date near the upper limit", () => {
  jest.spyOn(Math, "random").mockReturnValue(0.999999);

  const result = createRandomDateOfBirth();

  expect(result.getTime()).toBeGreaterThan(start);
});

test("returns a date near the upper limit", () => {
  jest.spyOn(Math, "random").mockReturnValue(0.999999);

  const result = createRandomDateOfBirth();

  expect(result.getTime()).toBeLessThan(today);
});