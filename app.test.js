const { add } = require('./feature/githubpages/app');

describe('add', () => {
  test('should return the sum of two numbers', () => {
    expect(add(2, 2)).toBe(4);
    expect(add(-1, 5)).toBe(4);
  });
});