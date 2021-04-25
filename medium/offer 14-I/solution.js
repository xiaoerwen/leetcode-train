/**
 * @file 剪绳子 I
 * @author xiaoerwen
 */

/**
 * 思路：
 * 1、n<3时，最大都是1
 * 2、两层循环，第一层为不同n；第二层为n最后一段可以为多长
 * 3、j * (i - j)为最少可以分成两段，他们的乘积是否比多段大
 */
const cuttingRope = function(n) {
    let dp = new Array(n + 1).fill(1);
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }

    return dp[n];
};
