/**
 * @file 移动球的最小操作数
 * @author xiaoerwen
 */

const minOperations = boxes => {
    let idxArr = [];
    boxes.split('').forEach((item, idx) => {
        item === '1' && idxArr.push(idx);
    });

    let result = [];
    for (let i = 0, len = boxes.length; i < len; i++) {
        if (!idxArr.length) {
            result.push(0);
            continue;
        }

        let sum = 0;
        for (let j = 0, len2 = idxArr.length; j < len2; j++) {
            if (idxArr[j] === i) {
                continue;
            }
            sum += Math.abs(i - idxArr[j]);
        }
        result.push(sum);
    }
    return result;
};

console.log(minOperations('00'));
