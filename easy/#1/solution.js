/**
 * @file 两数之和
 * @author xiaoerwen
 */

/**
 * 解题思路：取一个数，在剩余数组中找到其与目标之差值
 *
 * @param {Array} nums 数组
 * @param {number} target  目标之和
 */
function twoSum(nums, target) {
    if (!nums || !nums.length) {
        return [];
    }

    let len = nums.length;
    for (let i = 0; i < len - 1; i++) {
        // 此数之后的数组
        let restNums = nums.slice(i + 1);
        // 此数与目标的差值
        let rest = target - nums[i];

        let j = restNums.indexOf(rest);
        if (j > -1) {
            return [i, j + i + 1];
        }
    }
    return [];
}
