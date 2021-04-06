/**
 * @file 删除有序数组中的重复项
 * @author xiaoerwen
 */

const removeDuplicates = function(nums) {
    if (nums.length < 2) {
        return nums.length;
    }

    let len = nums.length;
    let j = len - 1;
    while (j >= 1) {
        if (nums[j] === nums[j - 1]) {
            nums.splice(j, 1);
        }
        j--;
    }
    return nums.length;
};
