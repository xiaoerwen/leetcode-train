/**
 * @file 二叉搜索树最小距离
 * @author xiaoerwen
 */

/**
 * 思路：二叉搜索树的特点：左边节点的值一定小于根节点的值，右边节点的值一定大于根节点的值，所以对二叉搜索树进行中序遍历，得到的就是一个升序的有序数组
 * 耗时：72ms，内存消耗：39.4M
 *
 * @param {Node} root 
 * @returns 
 */
const minDiffInBST = root => {
    // 先对二叉搜索树进行中序遍历，得到一个有序数组
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

    if (result.length < 3) {
        return result[0] ? (result[1] ? result[1] - result[0] : result[0]) : 0;
    }

    // 数组间两两比较，得到最小值
    let min = result[1] - result[0];
    let j = 2;
    let len = result.length;
    while (j < len) {
        let tmp = result[j] - result[j - 1];
        if (min > tmp) {
            min = tmp;
        }
        j++;
    }

    return min;

};
