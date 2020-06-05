/**
 * @file 有效的括号
 * @author xiaoerwen
 */

// 校验是否匹配括号
function isMatch(a, b) {
    switch (a) {
        case '(':
            if (b === ')') {
                return true;
            }
            break;
        case '{':
            if (b === '}') {
                return true;
            }
            break;
        case '[':
            if (b === ']') {
                return true;
            }
    }
    return false;
}

/**
 * 字符串是否由有效括号组成，递归解法
 *
 * @param {string} s 字符串
 * @return {boolean}
 */
const isValid = function (s) {
    // 空字符串为有效
    if (!s) {
        return true;
    }

    // 奇数长度的肯定不满足
    if (s.length % 2 !== 0) {
        return false;
    }

    // 思路：从最后一个括号开始，往前找匹配括号
    let j = s.length - 1;
    let i = j - 1;
    while (j > i && i >= 0) {
        // 如果找到相同括号，再以此处开始找
        if (s[i] === s[j]) {
            j = i;
            i = j - 1;
            continue;
        }

        if (isMatch(s[i], s[j])) {
            // 如果是'()'这种匹配，摘除这部分括号，对剩余部分做匹配
            if (i === j - 1) {
                let rest = s.substr(0, i) + s.substr(j + 1);
                return isValid(rest);
            }

            // 如果是'([]{})'这种匹配，还要区分摘除后的内部与外部
            let outer = s.substr(0, i) + s.substr(j + 1);
            let inner = s.substr(i + 1, j - i - 1);
            return isValid(outer) && isValid(inner);
        }

        i--;
    }

    return false;
};
