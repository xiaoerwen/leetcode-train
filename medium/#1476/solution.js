/**
 * @file 子矩形查询
 * @author xiaoerwen
 */

/**
 * @param {number[][]} rectangle
 */
const SubrectangleQueries = function(rectangle) {
    this.rectangle = rectangle;
    this.row = rectangle.length || 0;
    this.col = this.row ? rectangle[0].length : 0;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2 
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
    for (let i = row1; i < row2; i++) {
        for (let j = col1; j < col2; j++) {
            this.rectangle[i][j] = newValue;
        }
    }
};

/** 
 * @param {number} row 
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function(row, col) {
    if (row < 0 || row > this.row || col < 0 || col > this.col) {
        return null;
    }

    return this.rectangle[row][col];
};

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */