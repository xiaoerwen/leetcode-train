/**
 * @file 矩阵中的路径
 * @author xiaoerwen
 */

const findIdx = (board, row, col, val) => {
    let idxs = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === val) {
                idxs.push([i, j]);
            }
        }
    }
    return idxs;
};

const isInArr = (arr, target) => {
    for (let i = 0, len = arr.length; i < len; i++) {
        if (JSON.stringify(arr[i]) === JSON.stringify(target)) {
            return true;
        }
    }
    return false;
};

const isNeibor = (board, m, n, target, row, col, fromIdxs) => {
    let idxs = [];
    if (m - 1 >= 0 && board[m - 1][n] === target) {
        !isInArr(fromIdxs, [m - 1, n]) && idxs.push([m - 1, n]);
    }

    if (m + 1 < row && board[m + 1][n] === target) {
        !isInArr(fromIdxs, [m + 1, n]) && idxs.push([m + 1, n]);
    }


    if (n - 1 >= 0 && board[m][n - 1] === target) {
        !isInArr(fromIdxs, [m, n - 1]) && idxs.push([m, n - 1]);
    }

    if (n + 1 < col && board[m][n + 1] ===target) {
        !isInArr(fromIdxs, [m, n + 1]) && idxs.push([m, n + 1]);
    }

    return idxs;
};

const isExist = (board, idxs, word, wordIdx, row, col, fromIdxs) => {
    if (!idxs.length) {
        return false;
    }

    if (!word[wordIdx]) {
        return true;
    }

    let tmp = [...fromIdxs];
    for (let i = 0, len = idxs.length; i < len; i++) {
        let [m, n] = idxs[i];
        fromIdxs.push([m, n])

        let targetIdx = isNeibor(board, m, n, word[wordIdx], row, col, fromIdxs);
        if (!targetIdx.length) {
            continue;
        }

        if (isExist(board, targetIdx, word, wordIdx + 1, row, col, fromIdxs)) {
            return true;
        }
        else {
            fromIdxs = [...tmp];
        }
    }

    return false;
};

const exist = (board, word) => {
    if (!word) {
        return false;
    }

    let row = board.length;
    if (!row) {
        return false;
    }

    let col = board[0].length;
    if (!col) {
        return false;
    }

    if (word.length > row * col) {
        return false;
    }

    let first = word[0];
    let startIdxs = findIdx(board, row, col, first);
    return isExist(board, startIdxs, word, 1, row, col, []);
};

let board = [['a','b'],['c','d']];
let word = 'abcd';
console.log(exist(board, word)) // false

board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
word = 'ABCCED'
console.log(exist(board, word)) // true

board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
word = 'SEE'
console.log(exist(board, word)) // true

word = "ABCB";
console.log(exist(board, word)) // false

board = [["a","a","a"],["a","b","b"],["a","b","b"],["b","b","b"],["b","b","b"],["a","a","a"],["b","b","b"],["a","b","b"],["a","a","b"],["a","b","a"]]
word = "aabaaaabbb"
console.log(exist(board, word)) // false

board = [["C","A","A"],["A","A","A"],["B","C","D"]]
word = "AAB"
console.log(exist(board, word)) // true

board = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]]
word = "ABCESEEEFS"
console.log(exist(board, word)) // true
