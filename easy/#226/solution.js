/**
 * @file 翻转二叉树
 * @author xiaoerwen
 */

const invertTree = function(root) {
    if (!root) {
        return null;
    }

    let left = invertTree(root.left);
    root.left = invertTree(root.right);
    root.right = left;

    return root;
};
