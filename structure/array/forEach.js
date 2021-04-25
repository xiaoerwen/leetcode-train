/**
 * @file 实现数组的forEach
 * @author xiaoerwen
 */

/**
 * 数组的forEach有哪些特性？
 * 1、第一个参数为函数，第二个参数为缺省参数，绑定this指向
 * 2、函数的参数有三个，item-当前项，index-当前项坐标，arr-完整数组
 * 3、forEach没有返回
 */
Array.prototype.forEach = function(fn) {
    if (typeof fn !== 'function') {
        return;
    }

    let context = arguments[1] || this;
    let arr = this;
    for (let i = 0, len = arr.length; i < len; i++) {
        fn.call(context, arr[i], i, arr);
    }
}
