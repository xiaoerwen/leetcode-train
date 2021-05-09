/**
 * @file 接雨水
 * @author xiaoerwen
 */

const trap = function(heights) {
    if (heights.length < 3) {
        return 0;
    }

    let max = -9999;
    let maxIdx;
    heights.forEach((item, index) => {
        if (item > max) {
            max = item;
            maxIdx = index;
        }
    });

    let left = heights.slice(0, maxIdx);
    let right = heights.slice(maxIdx + 1);

    function countHalf(arr, isLeft = true) {
        let count = 0;
        if (arr.length < 2) {
            return 0;
        }

        let max = -9999;
        let maxIdx;
        arr.forEach((item, index) => {
            if (item > max) {
                max = item;
                maxIdx = index;
            }
        });

        if (isLeft) {
            for (let i = maxIdx + 1, len = arr.length; i < len; i++) {
                count += (max - arr[i]);
            }

            count += countHalf(arr.slice(0, maxIdx));
        }
        else {
            for (let i = 0; i < maxIdx; i++) {
                count += (max - arr[i]);
            }

            count += countHalf(arr.slice(maxIdx + 1), false);
        }

        return count;
    }

    return countHalf(left) + countHalf(right, false);
}

let height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height)); // 6

height = [4,2,0,3,2,5];
console.log(trap(height)); // 9
