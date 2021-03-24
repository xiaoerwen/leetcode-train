/**
 * @file 寻找两个有序数组的中位数
 * @author xiaoerwen
 */

/**
 * 思路：比较两个有序数组的最小值与最大值，剔除最大最小值后重新比较
 * 重复此操作，直到剩余1个数，那么该数为中位数
 * 如果剩余2个数，那么中位数为两者和除2
 *
 * 耗时：20ms，内存消耗：41.9M
 *
 * @param {*} nums1 
 * @param {*} nums2 
 */
const findMedianSortedArrays = (nums1, nums2) => {
    if (!nums1.length && !nums2.length) {
        return null;
    }

    // 如果数组1为空
    if (!nums1.length) {
        // 若此时数组2仅一个值，那么该值为中位数
        if (nums2.length === 1) {
            return nums2[0];
        }

        /** 
         * 否则比较数组2，取中位数
         * 比较单个数组采用二分法
         */
        let half = Math.floor(nums2.length / 2);
        return findMedianSortedArrays(nums2.slice(0, half), nums2.slice(half));
    }

    // 如果数组2为空，同理
    if (!nums2.length) {
        if (nums1.length === 1) {
            return nums1[0];
        }

        let half = Math.floor(nums1.length / 2);
        return findMedianSortedArrays(nums1.slice(0, half), nums1.slice(half));
    }

    // 如果两个数组都只剩1个数，取两者中间值
    if (nums1.length === 1 && nums2.length === 1) {
        return nums1[0] === nums2[0] ? nums1[0] : (nums1[0] + nums2[0]) / 2;
    }

    // 比较两个数组的最小值，丢弃最小值
    nums1[0] < nums2[0] ? nums1.shift() : nums2.shift();

    /**
     * 这里注意边界值，丢弃最小值后有的数组可能为空
     */
    if (!nums1.length) {
        // 强制丢掉最大值
        nums2.pop();
        return findMedianSortedArrays(nums1, nums2);
    }
    if (!nums2.length) {
        nums1.pop();
        return findMedianSortedArrays(nums1, nums2);
    }

    // 比较两个数组的最大值，丢弃最大值
    nums1[nums1.length - 1] > nums2[nums2.length - 1] ? nums1.pop() : nums2.pop();
    // 重复该操作
    return findMedianSortedArrays(nums1, nums2);
};

const a1 = [1];
const a2 = [];
console.log(findMedianSortedArrays(a1, a2));
