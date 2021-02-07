/**
 * @file 移除链表中的元素
 * @author caixiaowen
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
    if (!head) {
        return null;
    }

    if (head.val === val) {
        head = removeElements(head.next, val);
    }
    else {
        head.next = removeElements(head.next, val);
    }

    return head;
};

