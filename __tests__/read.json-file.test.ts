import { describe, expect, jest, test } from '@jest/globals';
import readFile from '../src/read-json-file';



describe('reading file test', () => {
  test('does not throw an error', () => {
    expect(() => readFile()).not.toThrow();
  });
});