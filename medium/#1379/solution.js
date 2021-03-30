/**
 * @file 找出克隆二叉树中的相同节点
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
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
const getTargetCopy = function(original, cloned, target) {
    if (!original || !cloned) {
        return;
    }

    if (original.val === target.val) {
        return cloned;
    }

    return getTargetCopy(original.left, cloned.left, target) || getTargetCopy(original.right, cloned.right, target);
};

// 进阶:如果树中允许出现值相同的节点
const isSameNode = (original, cloned) => {
    if (!original && !cloned) {
        return true;
    }

    if (!original || !cloned) {
        return false;
    }

    if (original.val !== cloned.val) {
        return false;
    }

    return isSameNode(original.left, cloned.left) && isSameNode(original.right, cloned.right);
};

const getTargetCopy = function(original, cloned, target) {
    if (!original || !cloned) {
        return;
    }

    if (original.val === target.val && isSameNode(original, cloned)) {
        return cloned;
    }

    return getTargetCopy(original.left, cloned.left, target) || getTargetCopy(original.right, cloned.right, target);
};
