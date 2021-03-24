/**
 * @file 自建堆
 * @author xiaoerwen
 */

const swap = (items, i, j) => {
    let tmp = items[i];
    items[i] = items[j];
    items[j] = tmp;
};

// const heapLify = function (items, i) {
//     // 假设构建最小堆
//     while (Math.floor(i / 2) > 0 && items[i] < items[Math.floor(i / 2)]) {
//         console.log(Math.floor(i / 2), i);
//         swap(items, i, Math.floor(i / 2));
//         i = Math.floor(i / 2);
//     }
// };

// // 自左向右，自下而上
// const buildHeap = function (items, heapSize) {
//     while (heapSize < items.length) {
//         if (heapSize === items.length - 1) {
//             console.log(heapSize, items[heapSize])
//         }
//         heapLify(items, heapSize);
//         heapSize++;
//     }
// };

// const nums = [,6,10,2,3,9,4,5,8,1];
// buildHeap(nums, 1);
// console.log(nums)
// // [,1,2,4,3,9,6,5,10,8]

const heaplify = (items, heapSize, i) => {
    while (true) {
        let min = i;
        if (2 * i <= heapSize && items[min] > items[2 * i]) {
            min = 2 * i;
        }
        if ((2 * i + 1) <= heapSize && items[min] > items[2 * i + 1]) {
            min = 2 * i + 1;
        }
        if (min === i) {
            break;
        }
        swap(items, i, min);
        i = min;
    }
};

// 自右向左，自上而下
const buildHeap = (items, heapSize) => {
    let i = Math.floor(heapSize / 2);
    while (i > 0) {
        heaplify(items, heapSize, i);
        i--;
    }
};

const nums = [,6,10,2,3,9,4,5,8,1];
buildHeap(nums, nums.length - 1);
console.log(nums)
// [,1,2,4,3,9,6,5,10,8]
