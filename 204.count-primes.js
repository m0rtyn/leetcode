/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
  const numsIsPrime = new Array(n).fill(true).fill(false,0,2); // тут интересно
  for (let i = 2; i*i < n; i++) {
    if (numsIsPrime[i]) {
      for (let j = i*i; j<n; j+=i) { // и тут интересно
        numsIsPrime[j] = false;
      }
    }
  }
  return numsIsPrime.filter(Boolean).length;
}
// @lc code=end

