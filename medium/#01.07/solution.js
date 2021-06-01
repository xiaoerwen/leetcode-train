/**
 * @file 旋转矩阵
 * @author xiaoerwen
 */

/**
 * 旋转矩阵，不占用额外空间，必须对原数组进行操作
 *
 * @param {Array[Array]} matrix 
 * @return
 */
const rotate = function(matrix) {
    if (!matrix.length || !matrix[0].length) {
        return matrix;
    }

    let row = matrix.length;
    let col = matrix[0].length;
    matrix.splice(row, 0, ...new Array(col).fill(0).map(() => []));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            matrix[row + j].unshift(matrix[i][j]);
        }
    }

    matrix.splice(0, row);

    return matrix;
};

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(rotate(matrix)); // [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]

matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
console.log(rotate(matrix)); // [ [ 9, 5, 1 ], [ 10, 6, 2 ], [ 11, 7, 3 ], [ 12, 8, 4 ] ]
