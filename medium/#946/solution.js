/**
 * @file 验证栈序列
 * @author xiaoerwen
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function(pushed, popped) {
    if (!pushed.length) {
        return true;
    }

    /**
     * 思路：双指针加暂存区
     */
    let len = pushed.length;
    let i = 0;
    let j = 0;
    let stack = [];
    while (i < len || j < len) {
        if (pushed[i] === popped[j]) {
            i++;
            j++;
        }
        else if (stack.length && stack[stack.length - 1] === popped[j]) {
            stack.pop();
            j++;
        }
        else {
            if (i >= len) {
                return false;
            }

            stack.push(pushed[i]);
            i++;
        }
    }

    return true;
};
