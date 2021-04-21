/**
 * @file 解码
 * @author xiaoerwen
 */

/**
 * 其实本质思路一样，但是递归的话时间复杂度太高，超出时间限制了
 *
 * @param {*} s 
 * @returns 
 */
// const numDecodings = function(s) {
//     if (!s.length) {
//         return 0;
//     }

//     function decode(s) {
//         if (!s.length) {
//             return 1;
//         }

//         if (s.length === 1) {
//             return s[0] !== '0' ? 1 : 0;
//         }
//         if (s[0] === '0') {
//             return 0;
//         }

//         let len = s.length;
//         if (s[len - 1] === '0') {
//             if (s[len - 2] === '0' || +s[len - 2] > 2) {
//                 return 0;
//             }
//             return decode(s.slice(0, len - 2));
//         }
//         if (s[len - 2] === '0' || +s[len - 2] > 2) {
//             return decode(s.slice(0, len - 1));
//         }
//         if (s[len - 2] === '2' && +s[len - 1] > 6) {
//             return decode(s.slice(0, len - 1));
//         }
//         return decode(s.slice(0, len - 1)) + decode(s.slice(0, len - 2));
//     }

//     return decode(s);
    
// };

/**
 * 将递归思路转成动态规划，牺牲空间来换取时间
 *
 * @param {*} s 
 * @returns 
 */
const numDecodings = function(s) {
    // 几种边界条件可以先处理
    if (!s.length) {
        return 0;
    }

    if (s.length === 1) {
        return s[0] !== '0' ? 1 : 0;
    }
    if (s[0] === '0') {
        return 0;
    }

    let len = s.length;
    // 动态规划离不开数组
    let dp = new Array(len).fill(0);
    dp[0] = 1;
    let i = 1;
    while (i < len) {
        // 如果当前是'0'
        if (s[i] === '0') {
            // 如果是 '00' || '30' 这种，无法解码，直接返回0
            if (s[i - 1] === '0' || +s[i - 1] > 2) {
                return 0;
            }

            // 因为'0'无法独立存在，所以只能是和前一个字符硬捆绑在一起，因此等于 i-2 的值
            // 这里要考虑字符串长度如果不超过2，默认就是1种解法
            dp[i] = dp[i - 2] || 1;
        }
        // 如果前一项为'0'或大于2，代表无法和当前项组合，当前项只能自成一个码
        else if (s[i - 1] === '0' || +s[i - 1] > 2) {
            dp[i] = dp[i - 1];
        }
        // 如果前一项为'2'，那么当前项不能大于6，否则就只能自成一个码
        else if (s[i - 1] === '2' && +s[i] > 6) {
            dp[i] = dp[i - 1];
        }
        // 如果前一项和当前项组合的数字在 1-26 之间，那么就有两种解码方式了
        else {
            dp[i] = dp[i - 1] + (dp[i - 2] || 1);
        }
        i++;
    }

    return dp[len - 1];
    
};


let s = '12';
console.log(numDecodings(s)); // 2

s = '226';
console.log(numDecodings(s)); // 3

s = '0';
console.log(numDecodings(s)); // 0

s = '06';
console.log(numDecodings(s)); // 0

s = '890';
console.log(numDecodings(s)); // 0

s = '110';
console.log(numDecodings(s)); // 1

s = '26111';
console.log(numDecodings(s)); // 6

s = "2611055971756562"
console.log(numDecodings(s)); // 4

s = '111111111111111111111111111111111111111111111111111111';
console.log(numDecodings(s)); 