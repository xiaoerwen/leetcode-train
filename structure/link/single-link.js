/**
 * @file 单链表
 * @author caixiaowen
 */

 // 单链表的节点
class Node {
    constructor(el) {
        this.val = el;
        this.next = null;
    }
}

/**
 * 单链表
 */
class SingleLink {
    /**
     * 构造单链表，若有节点，则head指向该节点，长度为1；否则为空链表
     * @param {*} node 
     */
    constructor(node) {
        this.head = node;
        this.length = !node ? 0 : 1;
    }

    // 获取链表，只要拿到 head 即可
    get() {
        return this.head;
    }

    /**
     * 查找节点
     * 遍历链表，若出现节点值相等，则返回true；否则返回false
     * 边界条件：若链接为空，返回false
     *
     * @param {Node} node 节点
     */
    search(node) {
        let cur = this.head;
        while(cur) {
            if (node.val === cur.val) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    }

    /**
     * 追加节点
     * 遍历节点，在末尾追加节点，长度+1
     * 边界条件：若链表为空，head指向该节点，length为1
     *
     * @param {Node} node 节点
     */
    append(node) {
        let cur = this.head;
        if (!cur) {
            this.head = node;
            this.length = 1;
            return;
        }
        while(cur.next) {
            cur = cur.next;
        }
        cur.next = node;
        this.length++;
    }

    /**
     * 插入节点
     * 遍历节点到插入位置的前一个节点，将插入节点插入
     * 边界条件：若插入位置不正确，不插入；若插入位置为0，则head直接指向插入节点，节点再连接链表
     *
     * @param {number} position 插入位置
     * @param {Node} node 插入节点
     */
    insert(position, node) {
        if (position < 0 || position > this.length) {
            return;
        }
        if (position === 0) {
            let cur = this.head;
            this.head = node;
            node.next = cur;
            this.length++;
            return;
        }
        let cur = this.head;
        for (let i = 1; i < position - 1; i++) {
            cur = cur.next;
        }
        let tmp = cur.next;
        cur.next = node;
        node.next = tmp;
        this.length++;
    }

    /**
     * 移除节点
     * 遍历链表，找到该节点，进行移除，长度-1
     * 边界条件：若链表为空，不用移除；若移除的为head节点，则将head指向下一个节点
     *
     * @param {Node} node 待移除节点
     */
    remove(node) {
        let cur = this.head;
        if (cur.val === node.val) {
            this.head = cur.next;
            this.length--;
            return;
        }
        while(cur.next) {
            if (cur.next.val === node.val) {
                let tmp = node.next;
                cur.next = tmp;
                this.length--;
                return;
            }
            cur = cur.next;
        }
    }

    /**
     * 链表是否为空
     */
    isEmpty() {
        return this.length === 0;
    }

    /**
     * 链表的长度
     */
    size() {
        return this.length;
    }
}


// 验证单链表，测试demo
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

let list = new SingleLink();
console.log(list.length);
console.log(list.size());
console.log(list.isEmpty());

list.append(node1);
console.log(list.length);
console.log(list.size());
console.log(list.isEmpty());

list.append(node2);
console.log(list.search(node1));
console.log(list.search(node2));
console.log(list.size());

list.insert(1, node3);
console.log(list.size());

list.insert(1, node4);
let head = list.get();
for(let i = 0; i < list.size(); i++) {
    console.log(head.val);
    head = head.next;
}

list.remove(node4);
head = list.get();
for(let i = 0; i < list.size(); i++) {
    console.log(head.val);
    head = head.next;
}
