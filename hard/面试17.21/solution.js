/**
 * @file 直方图储水
 * @author xiaoerwen
 */

/**
 * 计算水量
 *
 * @param {*} h 直方图数组
 * @param {*} maxHeight 最大高度
 */
const count = (h, maxHeight) => {
    let count = 0;
    h.forEach(item => {
        count += (maxHeight - item);
    });
    return count;
}

/**
 * 找到最大高度
 *
 * @param {*} h 直方图数组
 */
const findMaxHeight = h => {
    let max = Math.max(...h) || 0;
    let firstIdx = h.indexOf(max);
    let lastIdx = h.lastIndexOf(max);
    return {maxHeight: max, firstIdx, lastIdx};
};

/**
 * 计算最多可以储水
 * 耗时：92ms，内存消耗：40.2M
 *
 * @param {*} h 直方图数组
 */
const trap = h => {
    // 直方图小于3个不构成封闭条件，无法储水
    if (h.length < 3) {
        return 0;
    }

    // 以最大高度为base
    const {maxHeight, firstIdx, lastIdx} = findMaxHeight(h);

    // 最大高度左边的直方图，记得要以左边最大高度作为边界补充，否则就漏水了
    let left = h.slice(0, firstIdx);
    const {maxHeight: leftMax} = findMaxHeight(left);
    left.push(leftMax);

    // 右边同理
    let right = h.slice(lastIdx + 1);
    const {maxHeight: rightMax} = findMaxHeight(right);
    right.unshift(rightMax);
 
    if (firstIdx === lastIdx) {
        return trap(left) + trap(right);
    }

    // 涉及如果最大高度存在不止一个，那么两者之间是可以储水的
    let mid = h.slice(firstIdx + 1, lastIdx);
    return trap(left) + count(mid, maxHeight) + trap(right);
};

const nums = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(nums)); // 6

const nums2 = [0,3,0,2,1,1,0,0,3,1,2,0,1];
console.log(trap(nums2)); // 16
