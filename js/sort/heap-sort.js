/**
 * @file 堆排序
 * @author xiaoerwen
 */

const swap = (items, i, j) => {
    let tmp = items[i];
    items[i] = items[j];
    items[j] = tmp;
}

const heaplify = (items, i) => {
    while (Math.floor(i / 2) > 0 && items[i] > items[Math.floor(i / 2)]) {
        swap(items, i, Math.floor(i / 2));
        i = Math.floor(i / 2);
    }
};

const buildHeap = (items, heapSize, maxLen) => {
    while (++heapSize < maxLen) {
        heaplify(items, heapSize);
    }
}

const heapSort = nums => {
    if (nums.length < 2) {
        return nums;
    }

    let len = nums.length;
    let i = 1;
    while (i < len) {
        buildHeap(nums, 1, len - i + 1);
        swap(nums, 1, len - i);
        i++;
    }
    return nums;
};

let nums = [,3,6,9,1,0,3,5];
console.log(heapSort(nums));

nums = [,8,1,1,4,6,0,10,2,2];
console.log(heapSort(nums));
