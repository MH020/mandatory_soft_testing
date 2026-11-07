import { afterEach, describe, expect, it, jest } from '@jest/globals';
import type { NameGender } from '../../src/dtos/person-dto.js';
import { getRandomNameGender, getRandomPhoneNumber } from '../../src/service/person-service.js';

const people = [
    {
    "name": "Annemette P.",
    "surname": "Nilsson",
    "gender": "female"
    },

    {
    "name": "Freja O.",
    "surname": "Thygesen",
    "gender": "female"
    },
    {
    "name": "Anna S.",
    "surname": "Jespersen",
    "gender": "female"
    },
    ] as NameGender[]

describe("getRandomNameGender", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns the first person when math.random() is 0", () => {
    jest.spyOn(Math, "random").mockReturnValue(0);

    expect(getRandomNameGender(people)).toBe(people[0]);
  });

  it("can return a person from the middle of the list", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.6);

    expect(getRandomNameGender(people)).toBe(people[1]);
  });

    it("returns the last person when math.random() is >1", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.9999);

    expect(getRandomNameGender(people)).toBe(people[2]);
  });

  it("returns undefined for an empty list", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);
    
    expect(getRandomNameGender([])).toBeUndefined();
  });

});

describe("get_random_phone_number", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns a phone number starting with the first allowed prefix (2)", () => {
    jest.spyOn(Math, "random").mockReturnValue(0);
    const num = getRandomPhoneNumber();
    expect(Math.floor(num / 10_000_000)).toBe(2);
  });
  
  it("returns a phone number starting with the middle allowed prefix (495)", () => {
    jest.spyOn(Math, "random").mockReturnValue(.5);
    const num = getRandomPhoneNumber();
    expect(Math.floor(num / 100_000)).toBe(495);
  });
  
  it("returns a phone number starting with the last allowed prefix (829)", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.9999);
    const num = getRandomPhoneNumber();
    expect(Math.floor(num / 100_000)).toBe(829);
  });
  
  it("A phone number should always start be 8 digits", () => {
    const num = getRandomPhoneNumber();
    expect(num.toString().length).toBe(8);
  });

  
});



