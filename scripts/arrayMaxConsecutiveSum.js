module.exports = function solution(inputArray, k) {
  const sums = [];
  for (let i = 0; i < inputArray.length - k + 1; i++) {
    let end = i - 1 + k;
    let current = 0;
    while (end >= i) {
      current += inputArray[end];
      end--;
    }
    sums.push(current);
  }
  return Math.max(...sums);
};
