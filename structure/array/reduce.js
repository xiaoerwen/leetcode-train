/**
 * @file 实现reduce
 * @author xiaoerwen
 */

/**
 * 数组的reduce有什么特性？
 * 1、接收2个参数，函数、初始值(可缺省)
 * 2、初始值没有填写，则默认以数组第一项为初始值
 * 3、函数接收4个参数：累加值、当前值、当前坐标、完整数组
 * 4、返回值：返回累积结果
 */
Array.prototype.reduce = function(fn) {
    if (typeof fn !== 'function') {
        console.warn('...');
        return;
    }

    let arr = this;
    let prevVal = arguments[1] || arr[0];
    let startIdx = arguments[1] ? 0 : 1;
    for (let i = 0, len = arr.length; i < len; i++) {
        prevVal = fn(prevVal, arr[startIdx + i], startIdx + i, arr);
    }
    return prevVal;
}