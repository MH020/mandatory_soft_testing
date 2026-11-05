import { describe, expect, test } from "@jest/globals";

import { generateCprNumberFromDobAndGender, formatDateAsDDMMYY, generateCprSecretDigits} from "../../src/service/cpr-service.js"



describe('Convert DOB to DDMMYY format', () => {

    test.each([
        [new Date( Date.parse("1. jan, 2000") ), "010100"],
        [new Date( Date.parse("1. jan, 2000") ), "010100"],
        

        /*
        [1, 2, 3],
        [2, 3, 5],
        [5, 7, 12], */
    ])( 'When DOB is %o, date format is %s', (dob, expectedFormat) => {
        const actualFormat = formatDateAsDDMMYY(dob);
        expect(actualFormat).toBe(expectedFormat);

    });

    test ( "It doesn't work when DOB is: %o", () => {

    });
});


// Intervals: 

