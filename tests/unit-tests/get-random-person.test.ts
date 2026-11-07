import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals';
import type { NameGender } from '../../src/dtos/person-dto.js';
import { getRandomNameGender } from '../../src/service/person-service.js';
import {readFile} from '../../src/repository/person-repository.js';

jest.mock('../../src/repository/person-repository.js', () => ({
  readFile: jest.fn(),
}));

const nameGenderList = 
 [
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

  /*
  beforeEach(() => {
    jest.clearAllMocks();
    (readFile as jest.Mock).mockReturnValue( nameGenderList);

  });
*/
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns the first person when math.random() is 0", () => {
    jest.spyOn(Math, "random").mockReturnValue(0);
    
    expect(getRandomNameGender()).toBe(nameGenderList[0]);
  });

  it("can return a person from the middle of the list", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.6);

    expect(getRandomNameGender()).toBe(nameGenderList[1]);
  });

    it("returns the last person when math.random() is >1", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.9999);

    expect(getRandomNameGender()).toBe(nameGenderList[2]);
  });

  it("returns undefined for an empty list", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);
   // (readFile as jest.Mock).mockResolvedValue([]);
    (readFile as jest.Mock).mockReturnValue([]);
    expect(getRandomNameGender()).toBeUndefined();
  });

});



