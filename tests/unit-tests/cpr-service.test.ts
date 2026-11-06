import { describe, expect, test, jest, xtest } from "@jest/globals";
import { dateFromMilliseconds } from "drizzle-orm/sqlite-core";

import { generateCprNumberFromDobAndGender, formatDateAsDDMMYY, generateCprSecretDigits} from "../../src/service/cpr-service.js"
// import * as cprService from "../../src/service/cpr-service.js"



describe('Convert DOB to DDMMYY format', () => {

    test.each([
        // --- YEARS: ---
        [new Date( Date.parse("1. jan, 1868") ), "010168"], // 1868: Lower boundary. People born 100 years before CPR registry implemented
        [new Date( Date.parse("1. jan, 1869") ), "010169"],

        [new Date( Date.parse("1. jan, 1967") ), "010167"],
        [new Date( Date.parse("1. jan, 1968") ), "010168"], // CPR registry implemented in 1968
        [new Date (Date.parse("1. jan, 1969")), "010169"],
        [new Date (dateFromMilliseconds(0)), "010170"], // 1/1/1970 (0 miliseconds)
        [new Date (Date.parse("1. jan, 1971")), "010171"],

        [new Date( Date.parse("1. jan, 2025") ), "010125"],
        [new Date( Date.parse("1. jan, 2026") ), "010126"], // 2026: Upper boundary.

        // --- MONTHS + DATES: ---
        [new Date( Date.parse("1. jan, 2000") ), "010100"], //jan 1st: lower boundaries
        [new Date( Date.parse("2. jan, 2000") ), "020100"], 
        [new Date( Date.parse("1. feb, 2000") ), "010200"],
        [new Date( Date.parse("15. jun, 2000") ), "150600"], //jun 15th: middle values
        [new Date( Date.parse("30. nov, 2000") ), "301100"],
        [new Date( Date.parse("30. dec, 2000") ), "301200"],
        [new Date( Date.parse("31. dec, 2000") ), "311200"], // dec 31st: upper boundaries

        // --- MISC: ---
        [new Date( Date.parse("28. feb, 1999") ), "280299"], 
        [new Date( Date.parse("29. feb, 2000") ), "290200"], // Leap year
        [new Date( Date.parse("29. feb, 2001") ), "010301"], 

        [new Date( Date.parse("-1. jan, 2000") ), "010100"], // ????
        [new Date( Date.parse("1. jan, 1") ), "010101"],
        [new Date( Date.parse("1. jan, 0") ), "010100"],     
        [new Date( Date.parse("28. feb") ), "280201"],

    ])( 'When DOB is %o, date format is %s', (dob: Date, expectedFormat: string) => {        
        const actualFormat = formatDateAsDDMMYY(dob);
        expect(actualFormat).toBe(expectedFormat);
    });

    // --- SAD PATH :( ---
    test.each([
        // year should be 1000 - 9999 (4 digits)
        [new Date( Date.parse("1. jan, 999") )], 
        [new Date( Date.parse("1. jan, 10000") )],

        // Invalid dates:
        [new Date( Date.parse("1. jan, -1") )],
        [new Date( Date.parse("32. jan, 2000") )],

        // Invalid date formats:
        [new Date( Date.parse("1. djfskf, 2000") )],
        [new Date( Date.parse("1. jan, jfksdfj") )],
        [new Date( Date.parse("28") )]
    ]) ( "throws error when DOB is: %o", (dob: Date) => {
        expect( () => { formatDateAsDDMMYY(dob);
         } ).toThrow();
    });
});


// TODO. Issues with mocking utility functions. 
// generateCprSecretDigits especially needs to be mocked, because its output cannot be predicted, but affects the return value of generateCprNumberFromDobAndGender.
describe('generateCprNumberFromDobAndGender()', () => {
    xtest.each([
        [new Date( Date.parse("1. jan, 1967") ), "female", "010167", "1234", "010167-1234"],

    ]) ( "succedes with DOB: %o and gender: %s", (dob: Date, gender: string, dobFormatted: string, secretDigits: string, expected: string) => {
        
        const mockDobFormatted = jest.fn<typeof formatDateAsDDMMYY>();
        mockDobFormatted.mockImplementation((dob) => dobFormatted);
       
        // This would be nice, if it was called by generateCprNumberFromDobAndGender.
        const mockSecretDigits = jest.fn<typeof generateCprSecretDigits>(); //(gender: string) => secretDigits) ;
        mockSecretDigits.mockReturnValue(secretDigits);





        // Tried to import everything as cprService, so we could use spyOn like we do with Math.random, but it doesn't work. 
        // "   ( TypeError: Cannot assign to property 'generateCprSecretDigits' of [object Module])    "
        jest.spyOn(cprService, 'generateCprSecretDigits').mockReturnValue(secretDigits);

              // jest.mock(generateCprSecretDigits); 
        /*
        mockSecretDigits.mockImplementation((gender) => secretDigits);

        // jest.spyOn(Math, "random").mockReturnValue(i);
        */
        





        // This could also work, but doesn't.
        (generateCprSecretDigits as jest.Mock).mockReturnValue(secretDigits);

        // (generateCprSecretDigits as jest.Mock).mockImplementation((gender) => secretDigits); // mockReturnValue(secretDigits); //.mockReturnValue(secretDigits);
        // cprService.generateCprNumberFromDobAndGender(dob, gender);

        
        const actual = generateCprNumberFromDobAndGender(dob, gender);
        expect(actual).toBe(expected);
    });
});

describe('generateCprSecretDigits()', () => {

  test.each([
        ["female", 0.0, "0000"],
        ["female", 0.1, "1110"], // -1 (must be even)
        ["female", 0.9, "9998"],

        ["male", 0.0, "0001"], // +1 (must be uneven)
        ["male", 0.1, "1111"],
        ["male", 0.9, "9999"],

    ]) ( "succes with DOB: %o and gender: %s", (gender: string, i: number, expected: string) => {
        jest.spyOn(Math, "random").mockReturnValue(i);
        
        const actual = generateCprSecretDigits(gender);

        expect(actual).toBe(expected);
    });



});

