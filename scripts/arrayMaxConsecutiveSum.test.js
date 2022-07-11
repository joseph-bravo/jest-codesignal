const solution = require('./arrayMaxConsecutiveSum');

test('return should be a number', () => {
  expect(solution([(1, 2, 3)], 1)).toEqual(expect.any(Number));
});

test('given array [3, 2, 1, 1] and k = 1, should equal 3', () => {
  expect(solution([3, 2, 1, 1], 1)).toEqual(3);
});

test('given array [2, 3, 5, 1, 6] and k = 2, should equal 8', () => {
  expect(solution([2, 3, 5, 1, 6], 2)).toEqual(8);
});

test('given array [1, 3, 4, 2, 4, 2, 4] and k = 4, should equal 13', () => {
  expect(solution([1, 3, 4, 2, 4, 2, 4], 4)).toEqual(13);
});
