/**
 * @file 最长公共子序列
 * @author xiaoerwen
 */

const longestCommonSubsequence = function(text1, text2) {
    if (!text1.length || !text2.length) {
        return 0;
    }

    let len1 = text1.length;
    let len2= text2.length;
    let dp = new Array(len1 + 1).fill(0).map(item => item = new Array(len2 + 1).fill(0));

    for(let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[len1][len2];
};

let text1 = 'abcde';
let text2 = 'ace';
console.log(longestCommonSubsequence(text1, text2)); // 3

text1 = 'abc';
text2 = 'abc';
console.log(longestCommonSubsequence(text1, text2)); // 3

text1 = 'abc';
text2 = 'def';
console.log(longestCommonSubsequence(text1, text2));  // 0

text1 = 'oxcpqrsvwf';
text2 = 'shmtulqrypy';
console.log(longestCommonSubsequence(text1, text2)); // 2

text1 = 'quwdeuwdiwihxkxpabcde';
text2 = 'sadkjiwd';
console.log(longestCommonSubsequence(text1, text2));  // 4
