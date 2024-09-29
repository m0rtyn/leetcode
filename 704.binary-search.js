/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const firstIdx = 0
  const lastIdx = nums.length - 1
  return biSearch(nums, target, firstIdx, lastIdx)
};
  
const biSearch = (nums, target, first, last) => {
  const middleIdx = Math.floor((first + last) / 2)
  return target === nums[middleIdx] ? middleIdx 
    : first >= last ? -1 
    : target < nums[middleIdx] ? biSearch(nums, target, first, middleIdx) 
    : biSearch(nums, target, middleIdx+1, last)
}
// @lc code=end