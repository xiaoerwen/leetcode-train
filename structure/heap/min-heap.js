/**
 * @file 构造最小堆
 * @author xiaoerwen
 */

const swap = (items, i, j) => {
    let tmp = items[i];
    items[i] = items[j];
    items[j] = tmp;
};


/**
 * 从前往后，从下往上
 *
 * @param {*} items 
 * @param {*} i 
 */
// const heaplify = (items, i) => {
//     // 如果存在父节点且父节点的值大于子节点，交换父子节点
//     while(Math.floor(i/2) > 0 && items[i] < items[Math.floor(i/2)]) {
//         console.log('i', i);
//         console.log('i/2', Math.floor(i/2));
//         swap(items, i, Math.floor(i/2));
//         i = Math.floor(i/2);
//     }
// };

// const buildHeap = (items, heapSize) => {
//     while(heapSize < items.length) {
//         console.log('heapSize', heapSize);
//         heaplify(items, heapSize);
//         heapSize++;
//     }
// };

// let items = [,7, 3, 2, 4, 6, 1, 8, 5];
// // let items = [, 3, 2];
// console.log('items111', items);
// buildHeap(items, 1);
// console.log('items', items);


/**
 * 从后往前，自上往下
 *
 * @param {*} items 
 * @param {*} i 
 */
const heaplify = (items, i) => {
    while(true) {
        console.log('i', i);
        let minIndex = i;
        if (2*i < items.length && items[minIndex] > items[2*i]) {
            minIndex = 2*i;
        }
        if ((2*i+1) < items.length && items[minIndex] > items[2*i+1]) {
            minIndex = 2*i+1;
        }
        if (minIndex === i) {
            break;
        }
        swap(items, i, minIndex);
        i = minIndex;
    }
};

const buildHeap = (items, heapSize) => {
    while(heapSize > 0) {
        console.log('items333', items);
        heaplify(items, heapSize);
        heapSize--;
    }
};

let items = [, 7, 3, 2, 4, 6, 1, 8, 5];
// let items = [3, 2];
console.log('items111', items);
buildHeap(items, Math.floor((items.length - 1)/2));
console.log('items', items);
