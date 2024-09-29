/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
    
//   let newS = s.split('').sort().join()
//   let newT = t.split('').sort().join()
//   return newS === newT
// };

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  let hash = new Map();

  for (let i = 0; i < s.length; i++) {
    if (hash.has(s[i])) {
      hash.set(s[i], hash.get(s[i]) + 1);
    } else {
      hash.set(s[i], 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (hash.has(t[i])) {
      hash.set(t[i], hash.get(t[i]) - 1);
    } else {
      return false;
    }
  }

  const hashValues = Array.from(hash.values())
  return hashValues.every(val => val === 0);
}

// isAnagram('anagram', 'nagaram') // ?