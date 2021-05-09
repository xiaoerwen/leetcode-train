/**
 * @file 求有效三角形个数
 * @author xiaoerwen
 */

const triangleNumber = function(nums) {
    if (nums.length < 3) {
        return 0;
    }

    function swap(items, i, j) {
        let tmp = items[i];
        items[i] = items[j];
        items[j] = tmp;
    }

    function quickSort(nums) {
        if (nums.length < 2) {
            return nums;
        }

        let len = nums.length;
        let base = nums[Math.floor(len / 2)];
        let i = 0;
        let j = len - 1;
        while (i <= j) {
            while (nums[i] < base && i < len) {
                i++;
            }
            while (nums[j] > base && j >= 0) {
                j--;
            }
            if (i < j) {
                swap(nums, i, j);
                i++;
                j--;
            }
            else {
                break;
            }
        }

        return quickSort(nums.slice(0, i)).concat(quickSort(nums.slice(i)));
    }

    nums = quickSort(nums);

    let len = nums.length;
    let count = 0;
    for (let k = len - 1; k >= 2; k--) {
        if (nums[k] === 0) {
            continue;
        }

        let i = 0;
        let j = k - 1;
        while (i < j) {
            if (nums[i] === 0) {
                i++;
                continue;
            }
            if (nums[j] === 0) {
                j--;
                continue;
            }
            if (nums[i] + nums[j] > nums[k]) {
                count += (j - i);
                j--;
            }
            else {
                i++;
            }
        }
    }
    return count;
};

let nums = [2,2,3,4];
console.log(triangleNumber(nums)); // 3

nums = [0, 1, 0];
console.log(triangleNumber(nums)); // 0

nums = [48,66,61,46,94,75];
console.log(triangleNumber(nums)); // 19
