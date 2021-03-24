/**
 * @file 对称二叉树
 * @author xiaoerwen
 */

/** 
 * 递归解法
 * 耗时96ms，内存消耗39.6M
 */
const judgeSymmetryTree = root => {
    if (!root) {
        return true;
    }

    function isSymmetry(leftNode, rightNode) {
        if (!leftNode && !rightNode) {
            return true;
        }

        if (!leftNode || !rightNode) {
            return false;
        }

        if (leftNode.val !== rightNode.val) {
            return false;
        }

        return isSymmetry(leftNode.left, rightNode.right) && isSymmetry(leftNode.right, rightNode.left);
    }
    return isSymmetry(root.left, root.right);
};

/**
 * 迭代解法
 * 耗时92ms，内存消耗40.2M
 *
 * @param {*} root 
 */
const judgeSymmetryTree = root => {
    if (!root) {
        return true;
    }

    let stack = [root.left, root.right];
    while (stack.length) {
        let rightNode = stack.pop();
        let leftNode = stack.pop();
        if (!rightNode && !leftNode) {
            continue;
        }
        if (!rightNode || !leftNode) {
            return false;
        }
        if (rightNode.val !== leftNode.val) {
            return false;
        }
        stack.push(leftNode.left, rightNode.right);
        stack.push(leftNode.right, rightNode.left);
    }
    return true;
};
