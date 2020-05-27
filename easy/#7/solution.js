/**
 * @file 整数反转
 * @author xiaoerwen
 */

 /** 判断是否溢出整数范围
  * 
  * @param {number} n  数字
  */
function isOutSide(n) {
    if (n.toString(2).length > 31) {
        return true;
    }
    return false;
}

/** 解法1
 * @description 缺陷：数字转字符串转数组，耗时长、内存占用大，不推荐
 *
 * @param {number} x 输入数字
 * @return {number} y
 */
function solutionOne(x) {
    let arr = x.toString().split('');
    let flag = false;
    if (arr[0] === '-') {
        flag = true;
        arr.splice(0, 1);
    }
    // 数组反转
    let y = arr.reverse().join('');
    y = Number(y);

    if (isOutSide(y)) {
        return 0;
    }

    if (flag) {
        y = -y;
    }
    return y;
}

/** 解法2
 *
 * @param {number} x 输入数字
 * @return {number} y
 */
function solutionTwo(x) {
    if (x === 0) {
        return 0;
    }

    let flag = false;
    if (x < 0) {
        flag = true;
        x = -x;
    }

    let y = 0;
    // 从个位开始，个位转变为最高位，依次类推
    while (x >= 10) {
        y = y * 10 + x % 10;
        x = parseInt(x / 10);
    }
    // 最高位不再取余，需额外步骤
    y = y * 10 + x;

    if (isOutSide(y)) {
        return 0;
    }

    if (flag) {
        y = -y;
    }
    return y;
}
