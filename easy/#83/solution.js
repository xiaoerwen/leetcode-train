/**
 * @file 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
    if (!head) {
        return null;
    }

    let cur = head;
    let after = cur.next;

    while (after) {
        if (cur.val === after.val) {
            after = after.next;
            cur.next = after;
        }
        else {
            cur = after;
            after = after.next;
        }
    }

    return head;
};
