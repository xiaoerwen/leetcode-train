/**
 * @file 实现数组filter
 * @author xiaoerwen
 */

/**
 * 数组的filter有哪些特性？
 * 1、第一个参数为函数，第二个参数为缺省参数，绑定this指向
 * 2、函数的参数有三个，item-当前项，index-当前项坐标，arr-完整数组
 * 3、返回一个新数组
 */
Array.prototype.filter = function(fn) {
    if (typeof fn !== 'function') {
        return;
    }

    let context = arguments[1] || this;
    let arr = this;
    let result = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (fn.call(context, arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}
