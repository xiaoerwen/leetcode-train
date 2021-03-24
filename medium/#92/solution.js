/**
 * @file 反转链表II
 * @author xiaoerwen
 */

 /**
  * 反转中间区域的链表
  *
  * @param {*} node 
  */
const reverse = function(node) {
    let head = node;
    let prev = null;
    while (node) {
        let after = node.next;
        node.next = prev;
        prev = node;
        node = after;
    }
    let tail = prev;
    return {head, tail};
}

/**
 * 思路：记录反转区域的前一个节点后后一个节点，中间链表反转后，再把前后节点拼接上
 * 边界条件比较多，注意
 *
 * @param {*} head 
 * @param {*} left 
 * @param {*} right 
 */
const reverseBetween = function(head, left, right) {
    if (!head) {
        return null;
    }

    let idx = 1;
    let node = head;
    // 记录反转区域前一个节点
    let leftCur;
    // 记录反转区域的第一个节点
    let leftPrev;
    // 记录反转区域的最后一个节点
    let rightCur;
    // 记录反转区域的下一个节点
    let rightAfter;

    // 遍历链表获取中间区域链表
    while (node && idx <= right + 1) {
        switch(idx) {
            case left - 1: leftPrev = node;
                break;
            // 这里主要left与right可能相等，此时指向的为同一个节点
            case left: leftCur = node;
            case right: rightCur = node;
                break;
            case right + 1: rightAfter = node;
        }
        node = node.next;
        idx++;
    }

    // 切断反转区域与上一个节点的联系
    if (leftPrev) {
        leftPrev.next = null;
    }
    // 切断反转区域与之后节点的联系
    if (rightAfter && rightCur) {
        rightCur.next = null;
    }

    // 反转区域的链表进行反转
    const {head: rightNode, tail: leftNode} = reverse(leftCur);

    // 如果反转区域之前有节点，拼接
    if (leftPrev) {
        leftPrev.next = leftNode;
    }
    // 否则，反转区域的头节点就是链表的头节点
    else {
        head = leftNode;
    }

    // 如果反转区域之后有节点，拼接
    if (rightAfter) {
        rightNode.next = rightAfter;
    }

    return head;
};
