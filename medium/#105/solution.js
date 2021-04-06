/**
 * @file 重构二叉树
 * @author xiaoerwen
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }

    let root = new TreeNode(preorder[0]);
    let idx = inorder.indexOf(preorder[0]);
    let left = inorder.slice(0, idx);
    let right = inorder.slice(idx + 1);

    root.left = buildTree(preorder.slice(1, left.length + 1), left);
    root.right = buildTree(preorder.slice(left.length + 1), right);

    return root;
};