import { describe, expect, jest, test } from '@jest/globals';
import readFile from '../src/read-json-file.js';



describe('reading file test', () => {
  test('does not throw an error', () => {
    expect(() => readFile()).not.toThrow();
  });

  test('reading content test returns a non-empty array', () => {
    expect(readFile().persons.length).toBeGreaterThan(0);
  });

  
});



