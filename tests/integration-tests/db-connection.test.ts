import { afterEach, describe, expect, it, jest, test } from '@jest/globals';

import connection from '../../src/db/connection.js'

describe ('connection', () => {
    test('works with SELECTs',  async () => {
        const result = await connection.execute('SELECT * FROM postal_code LIMIT 1;');
        expect(result).not.toBeNaN();
    });
});




