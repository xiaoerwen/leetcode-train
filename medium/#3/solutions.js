/**
 * @file 求无重复字符的最长子串的长度
 * @author caixiaowen
 */

// 思路：滑动窗口，但是实现不同

/** 
 * 运行时长104ms，内存消耗43.5MB
 */
const lengthOfLongestSubstring = function(str) {
    if (!str || !str.length) {
        return 0;
    }

    let max = 1;
    let result = str[0];
    let i = 0;
    let len = str.length; 
    while (i < len) {
        // 如果当前字符已经存在最大字符串当中，将匹配到的字符及之前的字符串都删除
        let matchIdx = result.indexOf(str[i]);
        if (~matchIdx) {
            result = result.substr(matchIdx + 1);
        }
        result += str[i];
        // 更新max
        max < result.length && (max = result.length);
        i++;
    }
    return max;
}





/**
 * 运行时长368ms，内存消耗44.3MB
 */
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
