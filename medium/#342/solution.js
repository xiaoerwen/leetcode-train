/**
 * @file 摆动序列 II
 * @author xiaoerwen
 */

function swap(nums, i, j) {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}

/**
 * 太暴力了，丑陋！
 * 想办法优化！！
 */
const wiggleSort = function(nums) {
    if (nums.length < 2) {
        return nums;
    }

    let len = nums.length;
    let tmp = [...nums];
    let i = 0;
    let j = len % 2 === 0 ? len - 1 : len - 2;
    while (i < len && j >= 0) {
        let max = Math.max(...tmp);
        let maxIdx = tmp.indexOf(max);
        let min = Math.min(...tmp);
        let minIdx = tmp.lastIndexOf(min);
        nums[i] = min;
        nums[j] = max;

        if (min === max && Math.abs(i - j) === 1) {
            swap(nums, i, i - 2);
            swap(nums, j, j + 2);
        }
        
        if (maxIdx > minIdx) {
            tmp.splice(maxIdx, 1);
            tmp.splice(minIdx, 1);
        }
        else {
            tmp.splice(minIdx, 1);
            tmp.splice(maxIdx, 1);
        }

        i += 2;
        j -= 2;
    }

    while (i < len) {
        nums[i] = tmp[0];
        tmp.shift();
        i += 2;
    }

    while (j >= 0) {
        nums[j] = tmp[0];
        tmp.shift();
        j -= 2;
    }

    while (i < len) {
        nums[i] = tmp[0];
        tmp.shift();
        i += 2;
    }

    while (j >= 0) {
        nums[j] = tmp[0];
        tmp.shift();
        j -= 2;
    }

    let isRepeat = true;
    while (isRepeat) {
        let m = 1;
        let count = 0;
        while (m < len) {
            if (nums[m] === nums[m - 1]) {
                count++;
                i = m - 1;
                j = m;

                if (i + 2 < len && nums[i + 2] !== nums[i]) {
                    swap(nums, i, i + 2);
                }
                else if (i - 2 >= 0 && nums[i] !== nums[i - 2]) {
                    swap(nums, i, i - 2);
                }

                if (j - 2 >= 0 && nums[j] !== nums[j - 2]) {
                    swap(nums, j, j - 2);
                }
                else if (j + 2 < len && nums[j + 2] !== nums[j]) {
                    swap(nums, j, j + 2);
                }
            }
            m++;
        }
        if (count === 0) {
            isRepeat = false;
        }
        else {
            count = 0;
        }
    }

    return nums;
};
