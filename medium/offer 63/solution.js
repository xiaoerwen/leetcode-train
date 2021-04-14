/**
 * @file 股票最大利润
 * @author xiaoerwen
 */

/**
 * 动态规划
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0;
    }

    let len = prices.length - 1;
    // 构造动态规划数组
    let dp = new Array(len).fill(new Array(len).fill(0));

    // 思路：当 j > i, dp[j][i] = max(dp[j-1][i], j-i) 
    let col = 0;
    while (col < len) {
        let row = col;
        while (row < len && col < row + 1) {
            if (prices[row + 1] < prices[col]) {
                row++;
                continue;
            }
            let tmp = prices[row + 1] - prices[col];
            if (row > 0) {
                let before = dp[row - 1][col];
                dp[row][col] = Math.max(tmp, before);
            }
            else {
                dp[row][col] = tmp;
            }
            row++;
        }
        col++;
    }

    return Math.max(...dp[dp.length - 1]);
};
