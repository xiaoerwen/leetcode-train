/**
 * @file 删除有序数组中的重复项
 * @author xiaoerwen
 */

/**
 * 思路：原地修改数组，如果从数组首位开始，那么出现重复项移除时，数组长度必会受到影响，所以可以考虑从数组尾端开始
 *
 * @param {Array} nums 数组
 */
const removeDuplicates = function(nums) {
    // 因为重复项不超过2，所以长度不超过3的数组无论如何都是满足条件的
    if (nums.length < 3) {
        return nums.length;
    }

    let len = nums.length;
    let j = len - 1;
    // 因为重复项为2，所以这里的边界条件为j>=2
    while (j >= 2) {
        // i指向j往前两位的数值
        let i = j - 2;
        // 如果往前两位等于j，证明出现重复项，一直往前找知道不重复为止
        while(nums[i] === nums[j] && i >= 0) {
            i--;
        }

        // 如果j和i间隔超出2，代表重复项nums[j]出现不止2次，此时需要删除
        if (j - i > 2) {
            nums.splice(i + 2, j - i - 2);
        }
        j--;
    }

    return nums.length;
};

let nums = [1,1,1,2,2,3];
console.log(removeDuplicates(nums));

nums = [0,0,1,1,1,1,2,3,3,3];
console.log(removeDuplicates(nums));

nums = [1,1];
console.log(removeDuplicates(nums));
