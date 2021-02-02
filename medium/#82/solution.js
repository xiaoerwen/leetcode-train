/**
 * @file 删除有序链表中的重复数字
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
var deleteDuplicates = function(head) {
    // 链表为空
    if (!head) {
        return null;
    }

    let cur = head.next;
    let flag = false;

    while(cur) {
        // 相邻节点相等
        if (cur.val === head.val) {
            // 若不存在后续节点，返回空
            if (!cur.next) {
                return null;
            }

            // 否则往后接着比较，且设置标志为true
            cur = cur.next;
            flag = true;
        }
        // 标志为true，表明当前head有重复，需改变head指向
        else if (flag) {
            head = cur;
            cur = head.next;
            flag = false;
        }
        // 相邻不相等，无需修改head
        else {
            break;
        }
    }

    // head的下一个节点为迭代所得
    head.next = deleteDuplicates(head.next);
    return head;
};
