/**
 * @file 寻找两个链表相交的节点
 * @author xiaoerwen
 */

/**
 * 思路，从链表尾端比较起，注意边界条件
 *
 * @param {*} headA 链表A
 * @param {*} headB 链表B
 */
const getIntersectionNode = (headA, headB) => {
    if (!headA || !headB) {
        return null;
    }

    let tailA = headA;
    let tailB = headB;
    let stackA = [];
    let stackB = [];
    // 获取链表A的尾结点
    while (tailA.next) {
        stackA.push(tailA);
        tailA = tailA.next;
    }
    // 获取链表B的尾结点
    while (tailB.next) {
        stackB.push(tailB);
        tailB = tailB.next;
    }

    let count = 1;
    while (stackA.length && stackB.length) {
        // 如果尾结点相等，往前移动指针
        if (tailA === tailB) {
            tailA = stackA.pop();
            tailB = stackB.pop();
            count++;
        }
        // 否则代表到了不相交初了，终止遍历
        else {
            break;
        }
    }

    /**
     * count为1有两种情况
     * 第一种：链表A和链表B都只有一个节点，那么判断他们是否相等即可
     * 第二种：遍历俩链表都没有相等的节点，证明俩链表不相交，返回null
     */
    if (count === 1) {
        return tailA === tailB ? tailA : null;
    }

    /**
     * 同理存在两种情况
     * 第一种：遍历完俩链表，每个节点都相等，那么返回头节点
     * 第二种：在不相交的节点处循环中断了，相交节点应该等于当前节点的下一个节点
     */
    return tailA === tailB ? tailA : tailA.next;
};
