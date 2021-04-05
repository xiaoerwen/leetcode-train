/**
 * @file 最长不包含重复字符的子字符串
 * @author xiaoerwen
 */

const lengthOfLongestSubstring = s => {
    if (s.length < 2) {
        return s.length;
    }

    let tmpStr = s[0];
    let count = 1;
    for (let i = 1, len = s.length; i < len; i++) {
        let idx = tmpStr.indexOf(s[i]);
        if (~idx) {
            tmpStr.length > count && (count = tmpStr.length);
            tmpStr = tmpStr.slice(idx + 1);
        }
        tmpStr += s[i];
    }

    tmpStr.length > count && (count = tmpStr.length);

    return count;
};

let s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s)); // 3

s = 'bbbbb';
console.log(lengthOfLongestSubstring(s)); // 1

s = 'pwwkew';
console.log(lengthOfLongestSubstring(s)); // 3
