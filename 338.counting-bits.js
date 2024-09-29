/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let result = [0]
  for (let i = 1; i <= n; i++) {
    result
      .push(toBinary(i)
        .split('')
        .reduce((a,n) => a+Number(n), 0)
      )
  }
  return result
};
const toBinary = (n) => {
  let result = ''
  while (n!==0) {
    result+=(n%2)
    n=Math.floor(n/2)
  }
  return result
}
// @lc code=end

