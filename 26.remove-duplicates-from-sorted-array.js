/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let p1 = 0
  let p2 = 0
  for (let i = 0;i < nums.length; i++){
    if (nums[i] === nums[i+1]) {
      p1 = i;
      for (let j = i; j < nums.length; j++) if(nums[p1] === nums[j]) p2 = j;
      nums.splice(p1+1,p2-p1)
    }
  }
  return nums.length
};
// @lc code=end

