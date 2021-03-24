/**
 * @file 幂集
 * @author xiaoerwen
 */

/**
 * 思路：每一个nums[i]，都在之前的子集上加
 * [[]]
 * [[], | [1]]
 * [[], [1], | [2], [1,2]]
 * [[], [1], [2], [1,2], | [3], [1,3], [2,3], [1,2,3]]
 */
const subsets = function(nums) {
    if (!nums.length) {
        return [[]];
    }

    let result = [[]];
    for (let i = 0, len = nums.length; i < len; i++) {
        let tmp = [...result];
        for (let j = 0, len2 = tmp.length; j < len2; j++) {
            result.push(tmp[j].concat(nums[i]));
        }
    }
    return result;
};
