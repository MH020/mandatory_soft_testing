import { afterEach, describe, expect, it, jest } from '@jest/globals';
import { floor } from '../../src/repository/addresse-repository.js';





describe("randomLetters", () => {
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
