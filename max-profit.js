/**
  * @param {number[]} prices
  * @return {number}
  */
function maxProfit(prices) {
  let min = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length + 1; i++) {
    const price = prices[i];
    min = Math.min(price, min)
    const newProfit = price - min;
    if (newProfit > 0 && newProfit > profit) {
      profit = newProfit;
    }
  }

  return profit;
};

// maxProfit([1, 2]) // ?
// maxProfit([2, 1]) // ?
// maxProfit([1, 2, 3]) // ?
// maxProfit([1, 3, 2]) // ?
// maxProfit([3, 1, 2]) // ?
// maxProfit([4, 3, 1, 2]) // ?
// maxProfit([3, 1, 2, 4]) // ?
maxProfit([7, 1, 5, 3, 6, 4]) // ?