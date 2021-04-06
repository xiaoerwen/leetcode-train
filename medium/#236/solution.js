/**
 * @file 寻找二叉树节点的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
    if (!root) {
        return null;
    }

    if (root === p || root === q) {
        return root;
    }

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left === null) {
        return right;
    }

    if (right === null) {
        return left;
    }

    return root;
    
};