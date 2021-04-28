/**
 * @file 摆动序列
 * @author xiaoerwen
 */

/**
 * 思路：动态规划
 * 摆动序列分为两种，一种升序一种降序
 * 升序摆动，那么必须比前一个值大；当出现比前一个值大的值时，比较他作为升序摆动的长度更长，还是作为降序摆动的长度更长
 * 降序摆动反之
 */
const wiggleMaxLength = function(nums) {
    if (nums.length < 2) {
        return nums.length;
    }

    let len = nums.length;
    let up = new Array(len).fill(1);
    let down = new Array(len).fill(1);
    for (let i = 1; i < len; i++) {
        if (nums[i] === nums[i - 1]) {
            up[i] = up[i - 1];
            down[i] = down[i - 1];
        }
        else if (nums[i] > nums[i - 1]) {
            up[i] = Math.max(down[i - 1] + 1, up[i - 1]);
            down[i] = down[i - 1];
        }
        else {
            up[i] = up[i - 1];
            down[i] = Math.max(up[i - 1] + 1, down[i - 1]);
        }
    }
    return Math.max(up[len - 1], down[len - 1]);
};
