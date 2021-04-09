/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let i = email.length - 1;
  let res = '';
  while ((email.charAt(i) !== '@') && (i >= 0)) {
    res = email.charAt(i) + res;
    --i;
  }
  return res;
}

module.exports = getEmailDomain;
