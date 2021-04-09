/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const a = n.toString().split('');
  const min = a.indexOf(Math.min(...a).toString());
  return Number(a.filter((el, i) => i !== min).join(''));
}

module.exports = deleteDigit;
