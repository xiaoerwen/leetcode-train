/**
 * @file 有重复数字的数组全排列
 */

const quanPailie = nums => {
    if (nums.length < 2) {
        return [nums];
    }

    let preArr = Array.from(new Set(nums));
    let result = [];

    for (let i = 0, len = preArr.length; i < len; i++) {
        let tmp = preArr[i];
        let idx = nums.indexOf(tmp);
        let tmpArr = [...nums];
        tmpArr.splice(idx, 1);

        let tmpZuhe = quanpailie(tmpArr);
        for (let j = 0, tmpLen = tmpZuhe.length; j < tmpLen; j++) {
            tmpZuhe[j].unshift(tmp);
        }

        result = result.concat(tmpZuhe);
    }

    return result;
};
