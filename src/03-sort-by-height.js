/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const ar = arr;
  for (let i = 0; i < ar.length - 1; i++) {
    if (ar[i] !== -1) {
      let min = i;
      for (let j = i + 1; j < ar.length; j++) {
        if ((ar[j] < ar[min]) && ar[j] !== -1) {
          min = j;
        }
      }
      const temp = ar[i];
      ar[i] = ar[min];
      ar[min] = temp;
    }
  }
  return ar;
}

module.exports = sortByHeight;
