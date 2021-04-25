/**
 * @file 实现幂次方
 * @author xiaoerwen
 */

/**
 * 思路：递归
 * @param {number} x 值
 * @param {number} n 幂次方
 * @returns 
 */
const myPow = (x, n) => {
    if (n === 0) {
        return 1;
    }

    if (n === 1) {
        return x;
    }

    if (n === -1) {
        return 1 / x;
    }

    if (n % 2) {
        return x * myPow(x, n - 1);
    }

    return myPow(x * x, n / 2);
};
