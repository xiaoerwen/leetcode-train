/**
 * @file 求无重复字符的最长子串的长度
 * @author caixiaowen
 */

// 滑动窗口法
const countMaxSubStrLen = str => {
    if (!str || !str.length) {
        return 0;
    }

    let maxLen = 1;
    let len = str.length;

    for (let prev = 0; prev < len - 1; prev++) {
        let tmpStr = str[prev];
        for (let next = prev + 1; next < len; next++) {
            if (~tmpStr.indexOf(str[next])) {
                break;
            }

            tmpStr += str[next];
        }

        let tmpStrLen = tmpStr.length;
        if (tmpStrLen > maxLen) {
            maxLen = tmpStrLen;
        }
    }

    return maxLen;
};
