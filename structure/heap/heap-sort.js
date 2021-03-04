/**
 * @file 堆排序
 * @author caixiaowen
 */

const swap = (items, i, j) => {
    let tmp = items[i];
    items[i] = items[j];
    items[j] = tmp;
};

const heaplify = (items, heapSize, i) => {
    while (true) {
        let maxIdx = i;
        if (2 * i < heapSize && items[maxIdx] < items[2 * i]) {
            maxIdx = 2 * i;
        }
        if ((2 * i + 1) < heapSize && items[maxIdx] < items[2 * i + 1]) {
            maxIdx = 2 * i + 1;
        }
        if (maxIdx === i) {
            break;
        }
        swap(items, maxIdx, i);
        i = maxIdx;
    }
};

const buildHeap = (items, heapSize) => {
    let i = Math.floor(heapSize / 2);
    while (i > 0) {
        heaplify(items, heapSize, i);
        i--;
    }
};

const heapSort = items => {
    // 先构建堆，比如构建最大堆
    buildHeap(items, items.length - 1);

    let result = [];
    while (items.length > 1) {
        // 交换堆顶元素（最大值）和堆尾元素
        swap(items, 1, items.length - 1);
        // 最大值入序，同时堆长度减小 1
        result.push(items.pop());
        // 再次堆化
        heaplify(items, items.length - 1, 1);
    }
    return result;
};

const items = [,1, 9, 2, 8, 3, 7, 4, 6, 5]
console.log(heapSort(items));
