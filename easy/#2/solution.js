/**
 * @file 两数相加
 * @author xiaoerwen
 */

 /**
  * 构造链表
  *
  * @param {number} val  链表节点的值
  */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * 思路：双指针遍历，节点值相加，有进位则加进位
 * 注意两个链表长度不等的情况
 *
 * @param {*} l1 单链表1
 * @param {*} l2 单链表2
 * @return {*}
 */
function addTwoNumbers(l1, l2) {
    // 进位数
    let t = 0;
    // 头部指针
    let head = new ListNode(0);
    // 前一个指针
    let pre = head;
    // 当前指针
    let cur = head;

    // 当两个链表都有数时
    while (l1 && l2) {
        t = l1.val + l2.val + t;
        if (t > 9) {
            // 和超过个位，需进位
            cur.val = t % 10;
            t = parseInt(t / 10);
        }
        else {
            cur.val = t;
            t = 0;
        }

        // 前一个指针指向当前
        // 当前指针指向下一个
        pre = cur;
        cur.next = new ListNode(0);
        cur = cur.next;

        l1 = l1.next;
        l2 = l2.next;
    }

    // l1还有值，l2没有时
    while (l1) {
        t = l1.val + t;
        if (t > 9) {
            cur.val = t % 10;
            t = parseInt(t / 10);
        }
        else {
            cur.val = t;
            t = 0;
        }
        pre = cur;
        cur.next = new ListNode(0);
        cur = cur.next;

        l1 = l1.next;
    }

    // l2还有值，l1没有时
    while (l2) {
        t = l2.val + t;
        if (t > 9) {
            cur.val = t % 10;
            t = parseInt(t / 10);
        }
        else {
            cur.val = t;
            t = 0;
        }
        pre = cur;
        cur.next = new ListNode(0);
        cur = cur.next;

        l2 = l2.next;
    }

    // 如果还存在进位，需指向下一个节点
    if (t) {
        cur.val = t;
    }
    else {
        pre.next = null;
    }

    return head;
}
