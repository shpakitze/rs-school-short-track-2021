/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let cursym = str[0];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if ((cursym !== str[i])) {
      res += (count !== 1) ? `${count}${cursym}` : `${cursym}`;
      count = 1;
      cursym = str[i];
    } else count += 1;
  }
  if (res[res.length] !== cursym) res += (count !== 1) ? `${count}${cursym}` : `${cursym}`;
  return res;
}
module.exports = encodeLine;
