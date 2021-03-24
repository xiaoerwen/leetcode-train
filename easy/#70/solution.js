/**
 * @file 爬楼梯
 * @author xiaoerwen
 */

const climbStairs = function(n) {
    if (n < 2) {
        return 1;
    }

    // // 递归思路时间复杂度太高，超出时限
    // return climbStairs(n - 1) + climbStairs(n - 2);

    // 牺牲空间复杂度来换取时间复杂度
    let d = [1, 1];
    for (let i = 2; i <= n; i++) {
        d[i] = d[i - 1] + d[i - 2];
    }
    return d[n];
};

console.log(climbStairs(3));
console.log(climbStairs(2));
console.log(climbStairs(44));
