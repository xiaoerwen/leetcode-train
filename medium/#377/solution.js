/**
 * @file 组合求和
 * @author xiaoerwen
 */

const combinationSum4 = (nums, target) => {
    let dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= target; i++) {
        for (let j = 0, len = nums.length; j < len; j++) {
            if (nums[j] <= i) {
                dp[i] += dp[i - nums[j]];
            }
        }
    }
    return dp[target];
};

let nums = [1,2,3];
let target = 4;
console.log(combinationSum4(nums,target)); // 7

nums = [9];
target = 3;
console.log(combinationSum4(nums, target)) // 0

nums = [2, 1, 3]
target = 35
console.log(combinationSum4(nums, target));
