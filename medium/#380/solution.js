/**
 * @file 常数时间插入、删除和获取随机元素
 */

class RandomizedSet {
    constructor() {
        // list用来存储数据
        this.list = [];
        // map用来维护数据在存储中的位置
        this.map = new Map();
    }

    insert(val) {
        // 如果数据已存在，不允许插入
        if (this.map[val]) {
            return false;
        }

        this.list.push(val);
        // 存储列表长度，-1为对应位置
        this.map[val] = this.list.length;
        return true;
    }

    remove(val) {
        // 如果数据不存在，不允许移除
        if (!this.map[val]) {
            return false;
        }

        /** 
         * 这里考虑时间复杂度为O(1)，因此不能用常用的splice思维
         * 考虑交换指定数据与末尾数据，然后移除末位项
         */
        let index = this.map[val] - 1;
        let final = this.list[this.list.length - 1];

        if (index !== this.list.length - 1) {
            this.list[index] = final;
            this.map[final] = index + 1;
        }

        delete this.map[val];
        this.list.pop();
        return true;
    }

    getRandom() {
        // 保证随机获取的概率相等，比如总共3个数据，每个数据的概率应为1/3
        return this.list[Math.floor(Math.random() * this.list.length)];
    }
}
