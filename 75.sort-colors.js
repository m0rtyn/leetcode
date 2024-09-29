/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start

const partition = (items, left, right, pivot, direction) => {
  while (true) {
    while ((pivot - items[left]) * direction > 0) {
      left += 1;
    }

    while ((pivot - items[right]) * direction < 0) {
      right -= 1;
    }

    if (left >= right) return right + 1;

    const temporary = items[left];
    items[left] = items[right];
    items[right] = temporary;

    left += 1;
    right -= 1;
  }
};

const sort = (items, left, right, direction) => {
  const length = right - left + 1;

  if (length < 2) return items;

  const pivot = items[left];

  const splitIndex = partition(items, left, right, pivot, direction);
  sort(items, left, splitIndex - 1, direction);
  sort(items, splitIndex, right, direction);
  
  return items;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = (items, direction = 'asc') => {
  if (direction === 'asc') return sort(items, 0, items.length - 1, 1);
  
  return sort(items, 0, items.length - 1, -1);
}
// @lc code=end

