/**
 * @file 字符串转数字
 * @author xiaoerwen
 */

const strToInt = function(str) {
    // 去掉前后空格
    str = str.trim();
    if (!str.length) {
        return 0;
    }

    /**
     * 以下情况返回0：
     * 1、不以数字或者正负号开头，以其他特殊字符开头的，不予解析
     * 2、正负号同时存在的，不予解析
     * 3、正负号超过一个的，不予解析
     */
    if (!/^[\d\-\+]/.test(str)
        || /(\+{1,}\-{1,})|(\-{1,}\+{1,})/.test(str)
        || /^(\-{2,}|\+{2,})/.test(str)) {
        return 0;
    }

    let len = str.length;
    let i = 0;
    let tmp = '';
    // 标识是否负数
    let isPositive = false;
    if (str[i] === '-') {
        isPositive = true;
        i++;
    }

    if (str[i] === '+') {
        i++;
    }

    // 0开头的要把0去掉
    while (str[i] === '0') {
        i++;
    }

    /**
     * 如果除去正负号和0之后没有数字了，不予解析
     * 如果中间存在特殊字符，不予解析
     */
    if (i === len || !/^\d/.test(str.substr(i))) {
        return 0;
    }

    while (i < len) {
        if (/\d/.test(str[i])) {
            tmp += str[i];
            i++;
        }
        else {
            break;
        }
    }

    // 最小数值 -2^31
    let min = (2<<30) + '';
    // 最大数值 2^31 - 1
    let max = (Math.pow(2, 31) - 1) + '';

    if (isPositive) {
        if (tmp.length > min.substr(1).length || (tmp.length === min.substr(1).length && tmp > min.substr(1))) {
            return parseInt(min);
        }
        return parseInt('-' + tmp);
    }

    if (tmp.length > max.length || (tmp.length === max.length && tmp > max)) {
        return parseInt(max);
    }
    return parseInt(tmp);
};
