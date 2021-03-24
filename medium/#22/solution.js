/**
 * @file 生成括号
 * @author xiaoerwen
 */

/**
 * 思路分析：回溯算法（深度优先遍历）
 * 每插入一个')'之前，必须先判断有等待与其匹配的'('，也就是插入')'的前提是'('的个数 > ')'的个数
 *
 * 耗时：88ms，内存消耗:39.5M
 */
const generateParenthesis = function(n) {
    let result = [];
    const addParenthesis = (s, left, right) => {
        if (left > n || left < right) {
            return;
        }
        if (left + right === 2 * n) {
            result.push(s);
            return;
        }
        addParenthesis(s + '(', left + 1, right);
        addParenthesis(s + ')', left, right + 1);
    };
    addParenthesis('', 0, 0);
    return result;
};
