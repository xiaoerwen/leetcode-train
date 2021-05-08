/**
 * @file 验证二叉树
 * @author xiaoerwen
 */

/**
 * 思路：用出入度来验证，根节点的出度为2，入度为0；null节点的入度为1，没有出度；其他节点入度为1，出度为2
 * 一颗完整的二叉树，在没有遍历结束之前，入度不可能大于出度
 *
 * @params {string} preorder 前序遍历序列
 * @return
 */
const isValidSerialization = function(preorder) {
    if (!preorder.length) {
        return false;
    }

    if (preorder.length === 1) {
        return preorder[0] === '#';
    }

    preorder = preorder.split(',');

    if (preorder.length < 3) {
        return false;
    }

    let inDegree = 0;
    let outDegree = 0;
    for (let i = 0, len = preorder.length; i < len; i++) {
        if (i === 0) {
            if (preorder[i] === '#') {
                return false;
            }
            outDegree += 2;
        }
        else if (preorder[i] === '#') {
            inDegree++;
        }
        else {
            inDegree++;
            outDegree += 2;
        }

        if (i !== len - 1 && inDegree >= outDegree) {
            return false;
        }
    }

    return inDegree === outDegree;
};

let s = '9,3,4,#,#,1,#,#,2,#,6,#,#';
console.log(isValidSerialization(s)); // true

s = '1,#';
console.log(isValidSerialization(s)); // false

s = '9,#,#,1';
console.log(isValidSerialization(s)); // false