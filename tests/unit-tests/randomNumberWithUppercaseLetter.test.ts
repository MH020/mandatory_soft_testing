import { afterEach, describe, expect, it, jest } from '@jest/globals';
import { randomNumberWithUppercaseLetter } from '../../src/service/adresses-servoce.js';





describe("randomLetters", () => {
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
