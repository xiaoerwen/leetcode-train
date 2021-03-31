/**
 * @file 子集 II
 * @author xiaoerwen
 */

/** 
 * 耗时：80ms，内存消耗：39.8M 
 */
const subsetsWithDup = function(nums) {
    let result = [[]];

    if (!nums.length) {
        return result;
    }

    nums = nums.sort((a, b) => a - b);

    let preLen = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        let len2 = result.length;
        let j = 0;
        if (i > 0 && nums[i] === nums[i - 1]) {
            j = preLen;
        }

        while (j < len2) {
            let tmp = result[j].concat(nums[i]);
            result.push(tmp);
            j++;
        }

        preLen = len2;
    }

    return result;
};

console.log(subsetsWithDup([1,2,2,3]));
console.log(subsetsWithDup([4,4,4,1,4]));
