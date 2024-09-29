/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = (s,t)=>backspace(s) === backspace(t);

/** @param {string} str */
function backspace(str) {
  const newArr = []
  for (let i=0;i<=str.length-1;i++){str[i]==='#'?newArr.pop():newArr.push(str[i])}
  return newArr.join()
}
// @lc code=end

