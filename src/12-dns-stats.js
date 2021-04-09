/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  domains.forEach((element) => {
    const ar = element.split('.');
    let it = '';
    for (let i = ar.length - 1; i >= 0; i--) {
      it += `.${ar[i]}`;
      res[it] = res[it] ? res[it] += 1 : 1;
    }
  });
  return res;
}

module.exports = getDNSStats;
