/**
 * @file 链表倒数第k个节点
 * @author xiaoerwen
 */

const getKthFormEnd = (head, k) => {
    let stack = [];
    while (head) {
        if (stack.length === k) {
            stack.shift();
        }
        stack.push(head);

        head = head.next;
    }

    if (stack.length < k) {
        return null;
    }

    return stack[0];
};
