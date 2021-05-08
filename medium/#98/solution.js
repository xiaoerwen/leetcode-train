/**
 * @file 验证二叉搜索树
 * @author xiaoerwen
 */

/**
 * 思路：二叉搜索树的特点：左子节点的值必定小于根节点的值，右子节点的值必定大于根节点的值
 * 那么如果将二叉搜索树进行中序遍历，得到的必定是一个升序序列；如果不是证明非二叉搜索树
 *
 * @param {Node} root 根节点
 * @returns 
 */
const isValidBST = function(root) {
    if (!root) {
        return true;
    }

    // 中序遍历
    let stack = [];
    let result = [];
    while (stack.length || root) {
        if (root) {
            stack.push(root);
            root = root.left;
        }
        else {
            root = stack.pop();
            result.push(root.val);
            root = root.right;
        }
    }

    // 最终得到应该是升序序列，如果不是，证明非二叉搜索树
    for (let i = 0, len = result.length; i < len; i++) {
        if (i > 0 && result[i] <= result[i - 1]) {
            return false;
        }
    }
    return true;
};
