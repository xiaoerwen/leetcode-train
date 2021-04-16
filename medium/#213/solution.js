/**
 * @file 打家劫舍
 * @author xiaoerwen
 */

/**
 * 动态规划计算最大值
 *
 * @param {*} nums 数组
 * @returns 
 */
const countMax = nums => {
    let max = Math.max(nums[0], nums[1]);
    let first = nums[0];
    let len = nums.length;
    for (let j = 2; j < len; j++) {
        let temp = max;
        max = Math.max(max, nums[j] + first);
        first = temp;
    }
    return max;
};

/**
 * @param {*} nums 
 * @returns 
 */
const rob = nums => {
    // 数组长度为2以内的都可以不用特殊计算
    if (!nums.length) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0];
    }

    if (nums.length === 2) {
        return Math.max(...nums);
    }

    let len = nums.length;
    // 因为头尾连接，需要掐头去尾
    return Math.max(countMax(nums.slice(0, len - 1)), countMax(nums.slice(1)));
};

let nums = [2,3,2];
console.log(rob(nums)); // 3

nums = [1,2,3,1];
console.log(rob(nums)); // 4

nums = [0];
console.log(rob(nums)); // 0

nums = [1,3,1,3,100];
console.log(rob(nums)); // 103

nums = [0,3,0,6,0,8,0,6];
console.log(rob(nums)); // 23

nums = [2,3,2,6,7,8,1];
console.log(rob(nums)); // 17

nums = [6,3,10,8,2,10,3,5,10,5,3];
console.log(rob(nums)); // 36
