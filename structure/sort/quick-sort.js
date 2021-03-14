/**
 * @file 快排
 * @author caixiaowen
 */

const wrap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

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
    while (i < j) {
        while (nums[i] < base) {
            i++;
        }
        while (nums[j] > base) {
            j--;
        }
        if (i < j) {
            wrap(nums, i, j);
            i++;
            j--;
        }
    }

    // 注意指针边界，否则会报错
    let left = i >= 0 ? nums.slice(0, i) : [];
    let right = i > len ? [] : nums.slice(i);
    return quickSort(left).concat(quickSort(right));
};

const nums = [8,4,9,3,6,2,0,7,1,5];
console.log(quickSort(nums));
