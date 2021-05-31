/**
 * @file 汉明距离
 * @author xiaoerwen
 */

const hammingDistance = function(x, y) {
    x = x.toString(2);
    y = y.toString(2);

    let lenX = x.length;
    let lenY = y.length;

    if (!lenX) {
        return lenY;
    }

    if (!lenY) {
        return lenX;
    }

    let maxLen = Math.max(lenX, lenY);
    x = x.padStart(maxLen, '0');
    y = y.padStart(maxLen, '0');

    let i = maxLen - 1;
    let count = 0;
    while (i >= 0) {
        if (x[i] !== y[i]) {
            count++;
        }
        i--;
    }

    return count;
};
