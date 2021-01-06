/**
 * @file 最长回文字符串
 * @author caixiaowen
 */

const isPalindrome = (s, i, j) => {
    if (i >= j) {
        return true;
    }

    if (s[i] !== s[j]) {
        return false;
    }

    return isPalindrome(s, i + 1, j - 1);
};

const longestPalindrome = s => {
    const len = s.length;

    if (len < 2) {
        return s;
    }

    let maxLen = 0;
    let palindromeStr = '';
    for (let i = 0; i < len - 1; i++) {
        for (let j = len - 1; j >= i; j--) {
            if (isPalindrome(s, i, j)) {
                let tmpLen = j - i + 1;

                if (tmpLen > maxLen) {
                    maxLen = tmpLen;
                    palindromeStr = s.slice(i, j + 1);
                }

                break;
            }
        }
    }

    return palindromeStr;
};
