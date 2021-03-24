/**
 * @file 数组中的第K个最大元素
 * @author xiaoerwen
 */

/**
 * 交换元素
 *
 * @param {Array} items 堆
 * @param {number} i 坐标
 * @param {number} j 坐标
 */
const swap = (items, i, j) => {
    let tmp = items[i];
    items[i] = items[j];
    items[j] = tmp;
};

/**
 * 交换堆元素，形成最小堆
 *
 * @param {Array} items 堆
 * @param {number} i 坐标
 */
const heapify = (items, i) => {
    while (Math.floor(i/2) >= 0 && items[i] < items[Math.floor(i/2)]) {
        swap(items, i, Math.floor(i/2));
        i = Math.floor(i/2);
    }
};

/**
 * 构建堆
 *
 * @param {*} items 堆
 * @param {*} heapSize 堆高
 */
const buildHeap = (items, heapSize) => {
    while(heapSize < items.length - 1) {
        heapify(items, heapSize);
        heapSize++;
    }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(nums, k) {
    let left = nums.slice(0, k);
    let right = nums.slice(k);
    buildHeap(left, k);
    for (let i = 0, len = right.length; i < len; i++) {
        if (left[0] < right[i]) {
            left[0] = right[i];
            buildHeap(left, k);
        }
    }
    return left[0];
};