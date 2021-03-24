/**
 * @file 复制复杂链表
 * @author xiaoerwen
 */

// Definition for a Node.
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};

let map = new Map();

/**
 * 耗时：80ms，内存消耗：39.3M
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function(head) {
    if (!head) {
        return null;
    }

    // 用字典维护新旧链表的关系，如果该节点已经复制过了，不再进行复制
    if (map.has(head)) {
        return map.get(head);
    }

    // 否则创建新节点，拷贝旧节点的值
    let copyHead = new Node(head.val, null, null);
    // 存储字典
    map.set(head, copyHead);

    // 修改新节点的指向
    copyHead.next = copyRandomList(head.next);
    copyHead.random = copyRandomList(head.random);

    return copyHead;
};
