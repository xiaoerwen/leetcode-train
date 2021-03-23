/**
 * @file 寻找有序数组中元素的起始位置与结束位置
 * @author caixiaowen
 */

const searchRange = (nums, target) => {
    let result = [-1, -1];

    if (!nums.length || target < nums[0] || target > nums[nums.length - 1]) {
        return result;
    }

    let i = 0;
    let j = nums.length - 1;
    while (i <= j) {
        if (nums[i] !== target) {
            i++;
            continue;
        }
        if (nums[j] !== target) {
            j--;
            continue;
        }
        result = [i, j];
        break;
    }
    return result;
};
