import { afterEach, describe, expect, it, jest, test } from '@jest/globals';
import { door } from '../../src/service/addresses-service.js';



describe("randomLetters", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    
    test.each([
        [0, "th"],
        [0.2, "mf"],
        [0.4, "tv"],
        ] as const)("with random = randomValue, returns = expected", (randomValue, expected) => {
        jest.spyOn(Math, "random").mockReturnValue(randomValue);

        expect(door()).toBe(expected);
    });
    test.each([
        [0, "1"],
        [0.5, "26"],
        [0.98, "50"],
        ] as const)("random value = numberRandomValue, returns = expected", (numberRandomValue, expected) => {
        jest.spyOn(Math, "random")
            .mockReturnValueOnce(0.6) 
            .mockReturnValueOnce(numberRandomValue);

        expect(door()).toBe(expected);
    });

    it("can return a number from 1 to 50", () => {
        jest.spyOn(Math, "random")
        .mockReturnValueOnce(0.6) 
        .mockReturnValueOnce(0);  

        expect(door()).toBe("1");
    });


    it("return door with letter and dash and number", () => {
        jest.spyOn(Math, "random")
        .mockReturnValueOnce(0.8) 
        .mockReturnValueOnce(0)   
        .mockReturnValueOnce(0)   
        .mockReturnValueOnce(0);  

        expect(door()).toBe("q-0");
    });


  it("return door with letter and number no dash", () => {
    jest.spyOn(Math, "random")
      .mockReturnValueOnce(0.8) 
      .mockReturnValueOnce(0)   
      .mockReturnValueOnce(0)   
      .mockReturnValueOnce(0.9); 

    expect(door()).toBe("q0");
  });


});
