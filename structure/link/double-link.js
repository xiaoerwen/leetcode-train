/**
 * @file 双链表
 * @author xiaoerwen
 */

/**
 * 双链表的节点有两个指针，prev前驱指针，next后驱指针
 */
class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

/**
 * 双链表
 */
class DoubleLink {
    /**
     * 双链表与单链表的区别：双链表内有两个指针，一个头指针head，一个尾指针tail
     *
     * @param {Node} node 节点
     */
    constructor(node) {
        this.head = node;
        this.tail = node;
        this.length = !node ? 0 : 1;
    }

    /**
     * 查找节点
     * 遍历链表，可从头遍历，也可从尾部遍历
     * 边界条件：若链表为空，返回false
     *
     * @param {Node} node 查找节点
     */
    search(node) {
        let cur = this.head;
        while(cur) {
            if (cur.val = node.val) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    }

    /**
     * 指定位置插入节点
     * 若位置不合规，返回null
     *
     * @param {number} position 插入位置
     * @param {Node} node 插入节点
     */
    insert(position, node) {
        if (position < 0 || position > this.length) {
            return;
        }

        /**
         * 若插入位置为头部，则头指针指向当前插入节点，修改节点内的指针指向，长度+1
         * 边界条件：若链表原为空，需修改head和tail
         */
        if (position === 0) {
            let tmp = this.head;
            this.head = node;
            if (tmp) {
                node.next = tmp;
                tmp.prev = node;
            }
            else {
                this.tail = node;
            }
            this.length++;
            return;
        }

        /**
         * 若插入位置为尾部，则尾指针指向当前插入节点，修改节点内指针指向，长度+1
         */
        if (position === this.length) {
            let tmp = this.tail;
            this.tail = node;
            tmp.next = node;
            node.prev = tmp;
            this.length++;
            return;
        }

        let tmp = this.head;
        for (let i = 0; i < position - 1; i++) {
            tmp = tmp.next;
        }
        let after = tmp.next;
        tmp.next = node;
        node.prev = tmp;
        node.next = after;
        after.prev = node;
        this.length++;
    }

    /**
     * 移除指定位置的节点
     *
     * @param {number} position 指定位置
     */
    removeAt(position) {
        if (position < 0 || position > this.length) {
            return;
        }

        /**
         * 若移除首节点，改变head指针指向，修改head节点的prev为null，长度-1
         * 边界条件：若原链表只有一个节点，移除后为空链接，head和tail都应指null
         */
        if (position === 0) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
            else {
                this.tail = null;
            }
            this.length--;
            return;
        }

        /**
         * 若移除尾节点，改变tail指针指向，修改tail节点的next为null，长度-1
         */
        if (position === this.length - 1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
            return;
        }

        let tmp = this.head;
        for (let i = 0; i < position; i++) {
            tmp = tmp.next;
        }
        let prev = tmp.prev;
        let after = tmp.next;
        prev.next = after;
        after.prev = prev;
        this.length--;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }
}




// 验证双链表，测试demo
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

let list = new DoubleLink();
console.log(list.isEmpty());

list.insert(0, node4);
console.log(list.head);
console.log(list.tail);
console.log(list.size());

list.insert(1, node2);
list.insert(0, node3);

let cur = list.head;
for(let i = 0; i < list.size(); i++) {
    console.log(cur.val);
    cur = cur.next;
}
let tmp = list.tail;
for (let j = 0; j < list.size(); j++) {
    console.log(tmp.val);
    tmp = tmp.prev;
}

list.removeAt(1);
list.insert(1, node1);
console.log(list.size());
cur = list.head;
for(let i = 0; i < list.size(); i++) {
    console.log(cur.val);
    cur = cur.next;
}
