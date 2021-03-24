/**
 * @file 三数之和
 * @author xiaoerwen
 */

/**
 * 三数之和
 *
 * @param {*} nums
 */
const threeSum = function(nums) {
    if (!nums.length) {
        return [];
    }
    let sortArray = [...nums].sort((a, b) => a - b);
    let len = sortArray.length;
    if (sortArray.length < 3 || sortArray[0] > 0 || sortArray[len - 1] < 0) {
        return [];
    }

    let result = [];
    let i = 0;
    while (i < len - 2) {
        let m = i + 1;
        let j = len - 1;
        while (m < j) {
            let sum = sortArray[i] + sortArray[m] + sortArray[j];
            if (sum === 0) {
                result.push([sortArray[i], sortArray[m], sortArray[j]]);
                while (sortArray[m + 1] === sortArray[m]) {
                    m++;
                }
                m++;
            }
            else if (sum < 0) {
                m++;
            }
            else {
                j--;
            }
        }
        while (sortArray[i + 1] === sortArray[i]) {
            i++;
        }
        i++;
    }
    
    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([0]))
console.log(threeSum([-2,0,1,1,2]))