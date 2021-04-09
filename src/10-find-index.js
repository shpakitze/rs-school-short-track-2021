/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let l = 0;
  let r = array.length;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (array[m] < value) l = m + 1;
    else
    if (array[m] > value) r = m - 1;
    else {
      return m;
    }
  }
  return 0;
}

module.exports = findIndex;
