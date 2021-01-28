/**
 * @file 字符串匹配解决方案2
 * @@author caixiaowen
 */

/**
 * 匹配括号是否有效
 * 思路：利用栈结构，遇到'('就入栈，遇到')'就出栈
 *
 * 耗时：84 ms，内存消耗：37.8M
 *
 * @param {string} s 输入字符串
 */
const isValid = s => {
    const matchMaps = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    let tmp = [];
    for(let i = 0, len = s.length; i < len; i++) {
        // 如果是左侧括号，就入栈
        if (matchMaps[s[i]]) {
            tmp.push(s[i]);
        }
        // 如果是右侧括号，判断与出栈的左侧括号是否匹配
        else if (s[i] !== matchMaps[tmp.pop()]) {
            return false;
        }
    }
    // 出入栈后，若还剩余元素，表明没有完全匹配
    return !tmp.length;
};

