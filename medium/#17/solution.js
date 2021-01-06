/**
 * @file 电话号码字母的组合
 * @author caixiaowen
 */

const letterCombinations = digits => {
    const maps = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

    if (digits.length < 2) {
        return maps[digits] || [];
    }

    let num = digits[0];
    let arr = maps[num];
    let tmpResult = letterCombinations(digits.slice(1));

    let result = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        let tmp = arr[i];
        for (let j = 0, len2 = tmpResult.length; j < len2; j++) {
            let tmpStr = tmpResult[j];
            result.push(tmp + tmpStr);
        }
    }

    return result;
};
