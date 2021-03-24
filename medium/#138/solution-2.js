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


/**
 * 耗时：92ms，内存消耗：39.3M
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function(head) {
    if (!head) {
        return null;
    }

    // 复制原链表的节点，作为后节点插入，链表最终格式为 1->1'->2->2'
    let cur = head;
    while(cur) {
        let curCopy = new Node(cur.val, null, null);
        curCopy.next = cur.next;
        cur.next = curCopy;
        cur = curCopy.next;
    }

    prev = head;
    cur = head.next;
    // 改变新链表的random指向，新节点的random指向原节点的random的next
    while(prev) {
        cur.random = prev.random ? prev.random.next : null;
        prev = cur.next;
        cur = prev && prev.next;
    }

    prev = head;
    cur = head.next;
    let copyHead = cur;
    // 分离新老节点，形成新链表
    while(prev && prev.next) {
        prev.next = cur.next;
        cur.next = prev.next && prev.next.next;
        prev = prev.next;
        cur = cur.next;
    }

    return copyHead;
};
