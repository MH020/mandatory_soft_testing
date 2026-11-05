import { afterEach, describe, expect, it, jest } from '@jest/globals';
import type { person } from '../../src/dtos/person-dto.js';
import { get_random_person } from '../../src/service/person-service.js';


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
    ] as person[]

describe("get_random_person", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns the first person when math.random() is 0", () => {
    jest.spyOn(Math, "random").mockReturnValue(0);

    expect(get_random_person(people)).toBe(people[0]);
  });

  it("can return a person from the middle of the list", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.6);

    expect(get_random_person(people)).toBe(people[1]);
  });

    it("returns the last person when math.random() is >1", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.9999);

    expect(get_random_person(people)).toBe(people[2]);
  });

  it("returns undefined for an empty list", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);
    
    expect(get_random_person([])).toBeUndefined();
  });

});


