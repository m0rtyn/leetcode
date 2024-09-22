/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} x
 * @param {number} y
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, x, y, color) {
  const currColor = image[x][y] //?
  if (color === currColor) return image


  image[x][y] = color;


  for (let i = 0; i >= image.length; i++) {
    for (let j = 0; j >= image.length; j++) {
      let cellColor = image[i][j]
      if (cellColor === currColor && (Math.abs(i+j - x+y) <= image.length)) {
        image[i][j] = color
      }
  }}
  return image
};
// @lc code=end

// [[2,2,2],[2,2,0],[2,0,1]]
floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2) // ?

const queue = new Queue()