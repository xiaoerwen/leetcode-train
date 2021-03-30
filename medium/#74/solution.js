/**
 * @file 寻找矩阵中是否存在某个值
 * @author xiaoerwen
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
    if (!matrix.length) {
        return false;
    }

    let i  = 0;
    let m = matrix.length;
    let inLine = -1;
    while (i < m) {
        let n = matrix[i].length;

        if (!n) {
            return false;
        }

        if (n === 1) {
            if (matrix[i][0] === target) {
                return true;
            }
            i++;
            continue;
        }

        let min = matrix[i][0];
        let max = matrix[i][n - 1];
        if (min === target || max === target) {
            return true;
        }

        if (min < target && max > target) {
            inLine = i;
            break;
        }

        i++;
    }

    if (inLine === -1) {
        return false;
    }

    return ~matrix[inLine].indexOf(target);
};
