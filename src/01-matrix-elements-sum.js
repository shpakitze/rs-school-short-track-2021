/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let s = 0;
  for (let j = 0; j < matrix[0].length; j++) {
    let i = 0;
    while ((i < matrix.length) && (matrix[i][j] !== 0)) {
      s += matrix[i][j];
      i++;
    }
  }
  return s;
}

module.exports = getMatrixElementsSum;
