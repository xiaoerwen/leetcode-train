/**
 * @file 复杂链表的复制
 * @author xiaoerwen
 */

function Node(val) {
    this.val = val;
    this.next = null;
    this.random = null;
};

/**
 * 克隆节点插入到当前节点的下一个节点
 *
 * @param {*} node 
 */
function cloneNode(node) {
    while (node) {
        let clonedNode = new Node(node.val);
        let nextNode = node.next;

        node.next = clonedNode;
        clonedNode.next = nextNode;
        node = nextNode;
    }
}

/**
 * 指定克隆节点的随机节点为当前节点的随机节点的下一个节点
 *
 * @param {*} node 
 */
function cloneRandomNode(node) {
    while (node) {
        let clonedNode = node.next;
        clonedNode.random = node.random && node.random.next;
        node = clonedNode.next;
    }
}

/**
 * 分离克隆节点和原节点，产生新链表
 *
 * @param {*} node 
 */
function splitClonedNode(node) {
    while (node) {
        let clonedNode = node.next;
        let nextNode = clonedNode.next;
        node.next = nextNode;
        clonedNode.next = nextNode && nextNode.next;
        node = nextNode;
        clonedNode = clonedNode.next;
    }
}

/**
 * 思路：克隆链表节点到当前节点的下一个节点，设置random节点，为源节点的random节点的next，然后再剥离新旧节点形成新链表
 *
 * @param {*} head 
 * @returns 
 */
const copyRandomList = head => {
    if (!head) {
        return null;
    }

    let node = head;
    cloneNode(node);

    node = head;
    cloneRandomNode(node);

    node = head;
    let newHead = head.next;
    splitClonedNode(node);
    return newHead;
};
