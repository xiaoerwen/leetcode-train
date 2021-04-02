/**
 * @file 去除重复次数k次的连续值
 * @author xiaoerwen
 */

/**
 * 思路：移除重复项
 *
 * @param {string} str 字符串
 * @param {number} k 重复次数
 */
const removeDuplicates = (str, k) => {
    if (str.length < k) {
        return str;
    }

    let result = '';
    let tmp = str[0];
    let i = 1;
    let len = str.length;
    while (i < len) {
        // 如果出现连续值，记录tmp
        if (i > 0 && str[i] === str[i - 1]) {
            tmp += str[i];
            i++;
            continue;
        }

        // 如果连续值个数不超过k，拼入返回结果
        if (tmp.length < k) {
            result += tmp;
        }
        // 如果超过k，选择超出k的部分拼入返回结果
        else if (tmp.length > k) {
            result += tmp.substr(0, tmp.length - k);
        }
        // 注意：如果连续个数等于k，直接抛弃

        // 重置tmp，以新值开始
        tmp = str[i];

        i++;
    }

    if (tmp.length !== k) {
        result += tmp;
    }


    console.log('result', result);

    return str === result ? str : removeDuplicates(result, k);
};

let str = 'abcd';
console.log(delDuplicate(str, 2)); // abcd

str = 'deeedbbcccbdaa';
console.log(delDuplicate(str, 3)); // aa

str = 'pbbcggttciiippooaais';
console.log(delDuplicate(str, 2)); // ps
