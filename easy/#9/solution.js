/**
 * @file 判断回文
 * @author xiaoerwen
 */

/**
 * 判断是否回文数字
 *
 * @param {number} x 输入数字
 * @return {boolean}
 */
function isPalindrome(x) {
    if (x < 0) {
        return false;
    }

    let y = 0;
    let t = x;
    // 与#1 反转思路有点象，不用字符串比较，则将数字反转，看是否一致
    while (x > 9) {
        y = y * 10 + x % 10;
        x = parseInt(x / 10);
    }
    y = y * 10 + x;

    if (t === y) {
        return true;
    }
    return false;
}
