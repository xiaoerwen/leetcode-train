/**
 * @file 顺时针打印矩阵
 * @author xiaoerwen
 */

/**
 * 思路：顺时针读取，即第一个数组入列，最后一个数组逆序入列，中间行打印最后一列和第一列；
 * 扣除外围矩阵后，剩余矩阵用该方法递归实现
 *
 * @param {Array} matrix 矩阵
 * @return {Array}
 */
const spiralOrder = function (matrix) {
    // 空矩阵特殊处理
    if (!matrix || !matrix.length) {
        return matrix;
    }

    // 矩阵维度为1直接返回
    if (matrix.length === 1) {
        return matrix[0];
    }

    // 获取矩阵的列数，行数
    const col = matrix[0].length;
    let line = matrix.length;

    let result = [];

    // 获取矩阵第一行的数组，读入结果
    let tmp = matrix.splice(0, 1);
    result = result.concat(tmp[0]);
    // 注意此时第一行已从矩阵中移除，总行数减一
    line--;

    // 读取中间行数的最后一列值，从第一行开始到倒数第二行
    let j = 0;
    while (j < line - 1) {
        // 如果中间行没有值了，说明已读取完，返回结果即可
        if (!matrix[j] || !matrix[j].length) {
            return result;
        }

        let tmpMatrix = matrix[j];
        result.push(tmpMatrix[col - 1]);
        tmpMatrix.pop();
        j++;
    }

    // 读取最后一行数组，注意逆序
    tmp = matrix.splice(line - 1, 1);
    tmp[0].reverse();
    result = result.concat(tmp[0]);
    // 注意此时最后一行已从矩阵中移除，总行数减一
    line--;

    // 读取中间行数的第一列值，从最后一行开始到第一行
    j = line - 1;
    while (j >= 0) {
        if (!matrix[j] || !matrix[j].length) {
            return result;
        }

        let tmpMatrix = matrix[j];
        result.push(tmpMatrix[0]);
        tmpMatrix.shift();
        j--;
    }

    // 剩余矩阵递归
    tmp = spiralOrder(matrix);
    result = result.concat(tmp);
    return result;
};
