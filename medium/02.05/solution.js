/**
 * @file 链表求和
 * @author caixiaowen
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * 非递归解法
 * 耗时144ms，内存消耗43.9M
 * @param {*} l1 
 * @param {*} l2 
 */
const addTwoNumbers = function(l1, l2) {
    if (!l1) {
        return l2;
    }

    if (!l2) {
        return l1;
    }

    let l3;
    let addition = 0;
    let val = l1.val + l2.val;
    if (val >= 10) {
        let rest = val % 10;
        addition = Math.floor(val / 10);
        l3 = new ListNode(rest);
    }
    else {
        l3 = new ListNode(val);
    }
    let head = l3;

    while (l1.next && l2.next) {
        l1 = l1.next;
        l2 = l2.next;
        val = l1.val + l2.val + addition;
        if (val >= 10) {
            rest = val % 10;
            addition = Math.floor(val / 10);
            l3.next = new ListNode(rest);
        }
        else {
            l3.next = new ListNode(val);
            addition = 0;
        }
        l3 = l3.next;
    }
    if (l1.next) {
        while (l1.next) {
            l1 = l1.next;
            val = l1.val + addition;
            if (val >= 10) {
                rest = val % 10;
                addition = Math.floor(val / 10);
                l3.next = new ListNode(rest);
            }
            else {
                l3.next = new ListNode(val);
                addition = 0;
            }
            l3 = l3.next;
        }
    }
    if (l2.next) {
        while (l2.next) {
            l2 = l2.next;
            val = l2.val + addition;
            if (val >= 10) {
                rest = val % 10;
                addition = Math.floor(val / 10);
                l3.next = new ListNode(rest);
            }
            else {
                l3.next = new ListNode(val);
                addition = 0;
            }
            l3 = l3.next;
        }
    }
    if (addition) {
        while (l3.next) {
            l3 = l3.next;
        }
        l3.next = new ListNode(addition);
    }

    return head;
};

/**
 * 递归解法
 * 耗时192ms，内存消耗42.4M
 * @param {*} l1 
 * @param {*} l2 
 */
const addTwoNumbers = function(l1, l2) {
    function addList(l1, l2, addition) {
        if (!l1 && !l2 && !addition) {
            return null;
        }

        let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + addition;
        let l3;
        if (val >= 10) {
            let rest = val % 10;
            addition = Math.floor(val / 10);
            l3 = new ListNode(rest);
        }
        else {
            l3 = new ListNode(val);
            addition = 0;
        }
        l3.next = addList(l1 ? l1.next : null, l2 ? l2.next : null, addition);
        return l3;
    }
    return addList(l1, l2, 0);
};
