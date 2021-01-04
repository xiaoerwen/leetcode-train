/**
 * @file 全排列
 * @author caixiaowen
 */

const quanPailie = nums => {
    if (nums.length < 2) {
        return nums;
    }

    let result = [];

    for (let i = 0, len = nums.length; i < len; i++) {
        let tmp = nums[i];
        let tmpArr = nums.filter((item, index) => index !== i);

        let tmpZuhe = quanpailie(tmpArr);
        for (let j = 0, tmpLen = tmpZuhe.length; j < tmpLen; j++) {
            tmpZuhe[j].unshift(tmp);
        }

        result = result.concat(tmpZuhe);
    }

    return result;
};
