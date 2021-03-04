/**
 * @file 堆插入
 * @author caixiaowen
 */

class Heap {
    constructor() {
        this.list = [,1,3,6];
    }

    insert(val) {
        this.list.push(val);

        let i = this.list.length - 1;
        // 假设该堆是最小堆
        while (i >= 0 && this.list[i] < this.list[Math.floor(i / 2)]) {
            this.swap(i, Math.floor(i / 2));
            i = Math.floor(i / 2);
        }
    }

    swap(i, j) {
        let tmp = this.list[i];
        this.list[i] = this.list[j];
        this.list[j] = tmp;
    }
}

let heap = new Heap();
heap.insert(10);
console.log(heap.list);

heap.insert(5);
heap.insert(1);
console.log(heap.list);
