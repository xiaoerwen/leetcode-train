/**
 * @file 2的幂
 * @author xiaoerwen
 */

/**
 * 除模法
 * 耗时 116ms, 内存消耗 39.3M
 */
const isPowerOfTwo = function(n) {
    if (n <= 0) {
        return false;
    }

    while (n % 2 === 0) {
        n = n / 2;
    }

    if (n === 1) {
        return true;
    }

    return false;
};

/**
 * 二进制相与
 * 耗时 104ms, 内存消耗 39.1M
 */
const isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0;
};
