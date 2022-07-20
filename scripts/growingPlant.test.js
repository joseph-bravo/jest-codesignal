const solution = require('./growingPlant');

test('solution should return a number', () => {
  const result = solution(100, 10, 910);
  expect(result).toEqual(expect.any(Number));
});

test('Result should be days needed to reach desired height.', () => {
  const upSpeed = 100;
  const downSpeed = 10;
  const desiredHeight = 910;
  const result = solution(upSpeed, downSpeed, desiredHeight);
  expect(result).toEqual(10);
});

test('Result should be days needed to reach desired height.', () => {
  const upSpeed = 10;
  const downSpeed = 9;
  const desiredHeight = 4;
  const result = solution(upSpeed, downSpeed, desiredHeight);
  expect(result).toEqual(1);
});

test('Result should be days needed to reach desired height.', () => {
  const upSpeed = 6;
  const downSpeed = 5;
  const desiredHeight = 10;
  const result = solution(upSpeed, downSpeed, desiredHeight);
  expect(result).toEqual(5);
});
