/**
 * @file 验证有效二叉树
 * @author xiaoerwen
 */

/**
 * 思路：题目以节点为编号，考虑深度遍历，每个节点与父节点的连线应该只有唯一一条，根节点没有父节点，所以连线为0；且根节点有且只有一个
 *
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
const validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    if (!n) {
        return false;
    }

    // 用map存储节点信息，查询复杂度低
    let map = new Map();
    let i = 0;
    while (i < n) {
        map.set(i, {count: 0});
        i++;
    }

    i = 0;
    while (i < n) {
        // 把当前节点当做父节点
        let parentNode = map.get(i);

        let left = leftChild[i];
        if (left !== -1) {
            let leftNode = map.get(left);
            // 如果子节点的左右子节点是其父节点，说明陷入了循环，此时二叉树无效；如果连线超过1，也证明无效
            if (leftNode.left === i || leftNode.right === i || leftNode.count === 1) {
                return false;
            }

            leftNode.count++;
            // 将子节点的父节点标记为当前节点
            leftNode.from = i;
            // 将当前节点的左子节点标记为子节点
            parentNode.left = left;
            map.set(left, leftNode);
        }

        let right = rightChild[i];
        if (right !== -1) {
            let rightNode = map.get(right);
            if (rightNode.left === i || rightNode.right === i || rightNode.count === 1) {
                return false;
            }

            rightNode.count++;
            rightNode.from = i;
            parentNode.right = right;
            map.set(right, rightNode);
        }

        i++;
    }

    // 获取根节点
    let rootArr = Array.from(map.values()).filter(item => !item.count);

    // 如果存在多个根节点 or 没有根节点，该二叉树无效
    if (rootArr.length !== 1) {
        return false;
    }

    // 如果当前只有一个节点，证明二叉树有效
    if (n === 1) {
        return true;
    }

    // 如果根节点出现父节点 or 根节点没有左右子节点，该二叉树无效
    if (rootArr[0].from || (typeof rootArr[0].left !== 'number' && typeof rootArr[0].right !== 'number')) {
        return false;
    }

    return true;
};
