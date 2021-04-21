/**
 * @file 实现strStr
 * @author xiaoerwen
 */

const strStr = function(haystack, needle) {
    if (!needle) {
        return 0;
    }

    if (!haystack) {
        return -1;
    }

    if (haystack.length < needle.length) {
        return -1;
    }

    let i = 0;
    let j = 0;
    let len1 = haystack.length;
    let len2 = needle.length;
    let idx = -1;
    while (i < len1 && j < len2) {
        if (haystack[i] !== needle[j]) {
            idx === -1 ? i++ : (i = idx + 1);
            idx = -1;
            j = 0;
            continue;
        }
        idx === -1 && (idx = i);
        i++;
        j++;
    }

    if (j < len2) {
        return -1;
    }

    return idx;
};
