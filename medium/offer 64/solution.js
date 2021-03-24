/**
 * @file 求 1+2+...+n
 * @author xiaoerwen
 */

const sumNums = n => (n > 1 && (n + sumNums(n - 1))) || 1;
 