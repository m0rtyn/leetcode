/*
 * @lc app=leetcode id=1143 lang=javascript
 *
 * [1143] Longest Common Subsequence
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let arr1 = text1.split("")
  let arr2 = text2.split("")
  let common = []
  let lastCommonIndex = 0

  for (let i = 0; i <= arr1.length - 1; i++) {
    let char1 = arr1[i] // ?

    for (let j = 0; j <= arr2.length - 1; j++) {
      let char2 = arr2[j] //?

      if (char1 === char2 && (j > lastCommonIndex || j === 0)) {
        lastCommonIndex = j
        common.push(char1)
        break
      }
    }
  }

  common //?
  return common.length
};
// @lc code=end

/* max result 21/47 */