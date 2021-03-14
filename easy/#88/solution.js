/**
 * @file 合并两个有序数组
 * @author caixiaowen
 */

const merge = (nums1, m, nums2, n) => {
    if (!m && !n) {
        return [];
    }

    if (!m) {
        return nums2;
    }

    if (!n) {
        return nums1;
    }

    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n - 1;

    while (len1 >= 0 && len2 >= 0) {
        if (nums1[len1] === nums2[len2]) {
            nums1[len--] = nums1[len1--];
            nums1[len--] = nums2[len2--];
        }
        else {
            nums1[len--] = nums1[len1] < nums2[len2]
                ? nums2[len2--]
                : nums1[len1--];
        }
    }

    if (len1 < 0) {
        while (len2 >=0) {
            nums1[len--] = nums2[len2--];
        }
    }

    return nums1;
};

console.log(merge([0],0,[1],1))

