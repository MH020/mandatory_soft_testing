import { describe, expect, jest, test } from '@jest/globals';
import readFile from '../src/read-json-file.js';



describe('reading file test', () => {
  test('does not throw an error', () => {
    expect(() => readFile()).not.toThrow();
  });
});

