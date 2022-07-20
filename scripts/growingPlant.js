/**
 * @param {Number} upSpeed
 * @param {Number} downSpeed
 * @param {Number} desiredHeight
 * @returns Number
 */
module.exports = function solution(upSpeed, downSpeed, desiredHeight) {
  let days = 0;
  let height = 0;
  while (height < desiredHeight) {
    days++;
    height += upSpeed;
    if (height >= desiredHeight) return days;
    height -= downSpeed;
  }
};
