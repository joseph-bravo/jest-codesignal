const solution = require('./different-symbols-naive');

test('solution should return a number', () => {
  const result = solution('abc');
  expect(result).toEqual(expect.any(Number));
});

test('cabca should return 3', () => {
  const result = solution('cabca');
  expect(result).toEqual(3);
});

test('aabb should return 2', () => {
  const result = solution('aabb');
  expect(result).toEqual(2);
});
