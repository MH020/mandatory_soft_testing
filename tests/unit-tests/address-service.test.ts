import { afterEach, describe, expect, it, jest, test } from '@jest/globals';
import { door, floor, randomLetters, randomNumberWithUppercaseLetter } from '../../src/service/addresses-service.js';





describe("door", () => {
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


describe("floor", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    
    it("can return st", () => {
        jest.spyOn(Math, "random")
        .mockReturnValueOnce(0) 
        .mockReturnValueOnce(0) 

        expect(floor()).toBe("st");
    });

    it("can return a number as a string", () => {
        jest.spyOn(Math, "random")
        .mockReturnValueOnce(0)  
        .mockReturnValueOnce(0.9); 

        expect(floor()).toBe("1");
    });

});


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


describe("randomNumberWithUppercaseLetter", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    
    it("can return a number followed by an uppercase letter", () => {
        jest.spyOn(Math, "random")
        .mockReturnValueOnce(0) //  1
        .mockReturnValueOnce(0) // letter
        .mockReturnValueOnce(0); //  Q

        expect(randomNumberWithUppercaseLetter()).toBe("1Q");
    });

    it("can return only a number", () => {
        jest.spyOn(Math, "random")
        .mockReturnValueOnce(0)   // 1 
        .mockReturnValueOnce(0.9); // > 0.5 

        expect(randomNumberWithUppercaseLetter()).toBe("1");
    });

});

