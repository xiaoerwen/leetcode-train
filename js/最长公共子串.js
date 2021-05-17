/**
 * @file 寻找最长公共子串
 * @author xiaoerwen
 */

function findMaxCommonSubStr(str1, str2) {
    if (!str1.length || !str2.length) {
        return '';
    }

    let len1 = str1.length;
    let len2 = str2.length;
    let dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0));
    let max = 0;
    let idx = -1;
    
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                if (i === 1 || j === 1) {
                    dp[i][j] = 1;
                }
                else if (str1[i - 2] === str2[j - 2]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                }
                else {
                    dp[i][j] = 1;
                }
                if (max < dp[i][j]) {
                    idx = i;
                    max = dp[i][j];
                }
            }
        }
    }
    
    return max === 0 ? '' : str1.substring(idx - max, idx);
}

let s1 = 'abcdefg';
let s2 = 'cdeabcd';
console.log(findMaxCommonSubStr(s1, s2));


s1 = 'eeeeepg';
s2 = 'epgeeeeeeeeff';
console.log(findMaxCommonSubStr(s1, s2));