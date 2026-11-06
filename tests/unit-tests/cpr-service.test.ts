import { describe, expect, test } from "@jest/globals";

import { generateCprNumberFromDobAndGender, formatDateAsDDMMYY, generateCprSecretDigits} from "../../src/service/cpr-service.js"
import { dateFromMilliseconds } from "drizzle-orm/sqlite-core";



// Valid partitions: 
// Years:
// 1868 - 1970 - 2026
// Months:
// Jan - Dec
// Days:
// 1 - 28, 29, 30, 31

/* Invalid partions:
Years: 
1 - 999
0
-1 - -[infinite]
2027 - [infinite]

Months:

Days:
-1 - -[infinite]
0
32
(in some months: 29, 30, 31)


*/
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
        
        [new Date( Date.parse("28. feb") ), "280201"], 


    ])( 'When DOB is %o, date format is %s', (dob: Date, expectedFormat: string) => {        
        const actualFormat = formatDateAsDDMMYY(dob);
        expect(actualFormat).toBe(expectedFormat);
    });

    // --- SAD PATH :(( ---
    test.each([
        [new Date( Date.parse("1. jan, 100") )],
        [new Date( Date.parse("28") )]
    ]) ( "throws error when DOB is: %o", (dob: Date) => {
        expect( () => { formatDateAsDDMMYY(dob); } ).toThrow();
    });
});


// Intervals: 

