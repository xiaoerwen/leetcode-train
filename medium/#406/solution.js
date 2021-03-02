/**
 * @file 身高排序
 * @author caixiaowen
 */

/**
 * 耗时：116ms，内存消耗:42.8M
 *
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = function(people) {
    // 进行身高降序排列，前置人数升序排列
    function compare(a, b) {
        return b[0] - a[0] || a[1] - b[1];
    }

    let result = people.sort(compare);
    for (let i = 0, len = result.length; i < len; i++) {
        // 排序完，主要看前置人数，插入到对应的位置
        let index = result[i][1];
        if (index !== i) {
            let insert = result[i];
            result.splice(i, 1);
            result.splice(index, 0, insert);
        }
    }

    return result;
};

/** 
 * 很牛逼的一行代码解决，等同于上面解法
 * 耗时：100ms，内存消耗：42.8M
 */
const reconstructQueue = function(people) {
    return people.sort((a, b) => b[0] - a[0] || a[1] - b[1]).reduce((p, v) => (p.splice(v[1], 0, v), p), []);
}
