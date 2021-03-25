/**
 * @file 132模式
 * @author xiaoerwen
 */

const find132pattern = nums => {
    if (nums.length < 3) {
        return false;
    }

    let stack = [];
    let medium = -Infinity;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < medium) {
            return true;
        }
        while (stack.length && stack[stack.length - 1] < nums[i]) {
            medium = stack.pop();
        }
        stack.push(nums[i]);
    }
    return false;
};

let nums = [3,5,0,3,4]; // true
console.log(find132pattern(nums));

nums = [1,2,3,4]; // false
console.log(find132pattern(nums));

nums = [3,1,4,2]; // true
console.log(find132pattern(nums));

nums = [-1,3,2,0]; // true
console.log(find132pattern(nums));

nums = [1,4,0,-1,-2,-3,-1,-2]; // true
console.log(find132pattern(nums));
