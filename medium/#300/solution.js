/**
 * @file 寻找最长递增子序列
 * @author caixiaowen
 */

// 动态规划
const lengthOfLIS = nums => {
    if (nums.length < 2) {
        return 1;
    }

    let dp = new Array(nums.length);
    let i = 0;
    let len = nums.length;
    while (i < len) {
        dp[i] = 1;
        i++;
    }

    let maxLen = 1;
    for (let m = 0; m < len; m++) {
        for (let k = 0; k < m; k++) {
            if (nums[k] < nums[m]) {
                dp[m] = Math.max(dp[m], dp[k] + 1);
            }
        }
        dp[m] > maxLen && (maxLen = dp[m]);
    }

    return maxLen;
};

let nums = [10,9,2,5,3,7,101,18];
console.log(lengthOfLIS(nums)); // 4

nums = [0,1,0,3,2,3];
console.log(lengthOfLIS(nums)); // 4

nums = [7,7,7,7,7,7,7];
console.log(lengthOfLIS(nums)); // 1

nums = [1,3,6,7,9,4,10,5,6];
console.log(lengthOfLIS(nums)); // 6

nums = [3,5,6,2,5,4,19,5,6,7,12];
console.log(lengthOfLIS(nums)); // 6
