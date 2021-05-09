/**
 * @file 二叉搜索树中第K小的元素
 * @author xiaoerwen
 */

/**
 * 思路：二叉搜索树中序遍历后是升序序列，采集其中第k个元素，即第k小的元素
 *
 * @param {*} root 
 * @param {*} k 
 * @returns 
 */
const kthSmallest = function(root, k) {
    let result = [];
    let stack = [];
    while (stack.length || root) {
        if (root) {
            stack.push(root);
            root = root.left;
        }
        else {
            root = stack.pop();
            result.push(root.val);

            // 如果已经满足k个元素了，不需要再遍历后序子节点了
            if (result.length === k) {
                break;
            }

            root = root.right;
        }
    }

    return result[k - 1];
};
