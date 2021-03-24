/**
 * @file 位1的个数
 * @author xiaoerwen
 */

const hammingWeight = function(n) {
    let str = n.toString(2);
    return /1/g.test(str) && str.match(/1/g).length;
};
