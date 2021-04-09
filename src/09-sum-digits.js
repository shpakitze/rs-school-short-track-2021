/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let s = 0;
  let k = n;
  while (k > 0) {
    s += k % 10;
    k = Math.floor(k / 10);
  }
  if (s < 10) return s; return getSumOfDigits(s);
}

module.exports = getSumOfDigits;
