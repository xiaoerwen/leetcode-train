/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param A string字符串 
 * @param n int整型 
 * @return int整型
 */
 export function getLongestPalindrome(A: string, n: number): number {
    // write code here
    
    let dp = new Array(n).fill(0).map(() => new Array(n).fill(true));
    let max = 1;
    for (let i = 1; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (i - j === 1) {
                dp[i][j] = A[i] === A[j];
                if (dp[i][j]) {
                    max < 2 && (max = 2);
                }
            }
            else {
                if (dp[i - 1][j + 1] && A[i] === A[j]) {
                    max < (i - j + 1) && (max = i - j + 1);
                }
                else {
                    dp[i][j] = false;
                }
            }
        }
    }
    return max;
}

