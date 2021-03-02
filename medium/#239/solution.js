
/**
 * @file 滑动窗口最大值
 * @author caixiaowen
 */

/**
 * 耗时8760ms，内存消耗70.9MB
 *
 * @param {Array} nums 数组
 * @param {number} k 窗口长度
 */
const maxSlidingWindow = function(nums, k) {
    let result = [];
    // 利用队列存储最大值下标，原因：利于下标访问数组方便，利于值访问数组不方便
    let queue = [0];

    for (let i = 1, len = nums.length; i < len; i++) {
        // 当最大值下标超出窗口，将其从队列中移除
        if (queue[0] === i - k) {
            queue.shift();
        }

        // 若新加入的元素不小于最大值，最大值替换为该新元素
        if (nums[i] >= nums[queue[0]]) {
            queue = [i];
        }
        // 否则将该元素下标push入队列
        else {
            // 在队列中，若比当前元素小的值，可以从坐标队列中移除
            queue = queue.filter(item => nums[item] > nums[i]);
            queue.push(i);
        }

        // 从首个窗口开始，每滑动一个窗口，则要存入一个最大值
        if (i >= k - 1) {
            result.push(nums[queue[0]]);
        }
    }

    return result;
}

const nums = [-6,-10,-7,-1,-9,9,-8,-4,10,-5,2,9,0,-7,7,4,-2,-10,8,7];
const k = 7;
// [9,9,10,10,10,10,10,10,10,9,9,9,8,8]
console.log(maxSlidingWindow(nums, k));
