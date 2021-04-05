/**
 * @file 青蛙跳台阶
 * @author xiaoerwen
 */

/**
 * 思路：容易想到递归，但是递归算法复杂度太高，牺牲内存换取一定的时间复杂度的降低
 */
const numWays = n => {
    if (n < 2) {
        return 1;
    }

    let stack = [1, 1];
    let i = 2;
    while (i <= n) {
        stack.push((stack[i - 1] + stack[i - 2]) % 1000000007);
        i++;
    }

    return stack[n];
};

let n = 2;
console.log(numWays(n)); // 2

n = 7;
console.log(numWays(n)); // 21

n = 44;
console.log(numWays(n)); // 1