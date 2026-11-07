import { afterEach, describe, expect, it, jest, test } from '@jest/globals';
import { adress } from '../../src/service/address-service.js';
import { getPostalCodes } from '../../src/repository/addresse-repository.js';


describe ('adresses tests', () => {
    test("street is between 1 and 15 characters", async () => {
        const result = await adress();

        expect(result.street.length).toBeGreaterThan(0);
        expect(result.street.length).toBeLessThanOrEqual(15);
    });


    test("number is a string", async () => {
        const result = await adress();
        expect(typeof result.number).toBe("string");
    });

    test("floor is a string", async () => {
        const result = await adress();

        expect(typeof result.floor).toBe("string");
    });


    test("door is a string", async () => {
        const result = await adress();

        expect(typeof result.door).toBe("string");
    });


    test("postal code and town come from the available postal codes", async () => {
        const result = await adress();
        const postalCodes = await getPostalCodes()

        expect(postalCodes).toContainEqual(result.postal_code);
    });

});
