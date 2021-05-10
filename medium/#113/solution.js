/**
 * @file 二叉树和为某值的路径
 * @author xiaoerwen
 */

const pathSum = function(root, targetSum) {
    // 如果树为空，返回空数组
    if (!root) {
        return [];
    }

    // 如果当前树只有一个节点，判断根节点的值是否满足目标值
    if (!root.left && !root.right) {
        return root.val === targetSum ? [[root.val]] : [];
    }

    let result = [];

    function countPathSum(node, target, stack) {
        if (!node) {
            return;
        }

        stack.push(node.val);

        // 如果到达最后一个叶子节点，判断此时是否已经达到目标值，如果是则push进结果中；否则直接结束本次遍历
        if (!node.left && !node.right) {
            target - node.val === 0  && result.push(stack);
            return;
        }

        // 如果存在左子节点或者右子节点，都认为该树未遍历到最后叶子节点，则继续寻找
        // 这里注意数组深拷贝，否则传递的是引用
        countPathSum(node.left, target - node.val, [...stack])
        countPathSum(node.right, target - node.val, [...stack]);
    }

    countPathSum(root, targetSum, []);
    return result;
};
