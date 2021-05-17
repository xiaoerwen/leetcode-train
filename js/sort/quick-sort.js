/**
 * @file 快排
 * @author xiaoerwen
 */

const swap = (items, i, j) => {
    let tmp = items[i];
    items[i] = items[j];
    items[j] = tmp;
};

/**
 * 思路：以中位数为基准，双指针遍历数组
 * 左指针遇到比基准数大的，停下
 * 右指针遇到比基准数小的，停下
 * 若左指针不超过右指针，交换两个指针的内容
 * 重复，保证基准左边的数永远比它小，右边的数永远比它大
 *
 * @param {*} nums 乱序数组
 */
const quickSort = nums => {
    // 边界条件
    if (nums.length < 2) {
        return nums;
    }

    let len = nums.length;
    let base = nums[Math.floor(len / 2)];
    let i = 0;
    let j = len - 1;

    while (i <= j) {
        while (nums[i] < base && i < len) {
            i++;
        }
        while (nums[j] > base && j >= 0) {
            j--;
        }
        if (i < j) {
            swap(nums, i, j);
            i++;
            j--;
        }
        else {
            break;
        }
    }
    
    return quickSort(nums.slice(0, i)).concat(quickSort(nums.slice(i)));
    

};

let nums = [5,1,6,2,5];
console.log(quickSort(nums));

nums = [4,6,7,2,1,3,2,1,9,0];
console.log(quickSort(nums));
