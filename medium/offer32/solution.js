/**
 * @file 从上到下打印二叉树
 * @author xiaoerwen
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const levelOrder = root => {
    if (!root) {
        return [];
    }

    let result = [];
    let stack = [root];

    while (stack.length) {
        root = stack.shift();
        result.push(root.val);
        root.left && stack.push(root.left);
        root.right && stack.push(root.right);
    }

    return result;
};
