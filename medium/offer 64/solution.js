/**
 * @file 求 1+2+...+n
 * @author caixiaowen
 */

const sumNums = n => (n > 1 && (n + sumNums(n - 1))) || 1;
 