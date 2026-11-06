import { afterEach, describe, expect, it, jest, test } from '@jest/globals';
import { adress } from '../../src/service/adresses-servoce.js';
import { postalCodes } from '../../src/repository/addresse-repository.js';


describe ('adresses tests', () => {
    test("street is between 1 and 15 characters", () => {
        const result = adress();

        expect(result.street.length).toBeGreaterThan(0);
        expect(result.street.length).toBeLessThanOrEqual(15);
    });


    test("number is a string", () => {
        const result = adress();

        expect(typeof result.number).toBe("string");
    });

    test("floor is a string", () => {
        const result = adress();

        expect(typeof result.floor).toBe("string");
    });


    test("floor is a string", () => {
        const result = adress();

        expect(typeof result.door).toBe("string");
    });


    test("postal code and town come from the available postal codes", () => {
        const result = adress();

        expect(postalCodes).toContainEqual(result.postal_code_and_town);
    });

});
