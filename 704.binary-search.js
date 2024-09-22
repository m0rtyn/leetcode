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
function search(nums, target) {
  const iter = (acc, counter) => {
    if (counter.length === 1) {
      return counter[0] === target ? acc : -1;
    }

    return iter(...getSearchingHalf(counter, target, acc));
  };

  return iter(0, nums);
}

function getSearchingHalf(
  numbers,
  target,
  acc
) {
  const middleIndex = Math.floor(numbers.length / 2);

  if (target < numbers[middleIndex]) {
    return [acc, numbers.slice(0, middleIndex)];
  } else {
    return [acc + middleIndex, numbers.slice(middleIndex, numbers.length)];
  }
}
// @lc code=end

search([-1,0,3,5,9,12], 9) // ?
