/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s.length <= 1) return true;

  const string = s.toLowerCase().replace(/[\W \_]/g, '')
  string // ?
  for (let i = 0; i < string.length; i++) {
    const lastIndex = string.length - 1;
    if (string[i] !== string[lastIndex - i]) return false;
  }
  return true;
};

isPalindrome('t') //?
isPalindrome("A man, a plan, a canal: Panama") //?
isPalindrome("ab_a") //?
