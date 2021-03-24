/**
 * @file 匹配字符规则
 * @author xiaoerwen
 */

const matchStrRegx = (s, p) => {
    if (!s || !s.length || !p || !p.length) {
        return false;
    }

    // 如果不包含任意符，那么长度不相等的肯定不匹配
    if (p.indexOf('*') === -1 && s.length !== p.length) {
        return false;
    }

    let i = 0;
    let j = 0;

    while (i < s.length || j < p.length) {
        if (s[i] === p[j] || p[j] === '.') {
            i++;
            j++;
        }
        else if (p[j] === '*') {
            if (s[i] === p[j - 1]) {
                i++;
            }
            else if (p[j - 1] === '.') {
                if (!s[i]) {
                    j++;
                }
                else {
                    i++;
                }
            }
            else {
                j++;
            }
        }
        else if (p[j + 1] === '*') {
            j += 2;
        }
        else {
            return false;
        }
    }

};
