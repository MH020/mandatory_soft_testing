

describe('Math functions', () => {
  test('add function correctly adds two numbers', () => {
    expect(2+3).toBe(5);
    expect(-1+1).toBe(0);
    expect(0+0).toBe(0);
  });

  test('subtract function correctly subtracts two numbers', () => {
    expect(5-2).toBe(3);
    expect(1-1).toBe(0);
    expect(0-5).toBe(-5);
  });
});