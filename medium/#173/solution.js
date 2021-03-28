/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    if (!root) {
        this.list = [];
        return;
    }

    let stack = [];
    this.list = [];
    while (stack.length || root) {
        if (root) {
            stack.push(root);
            root = root.left;
        }
        else {
            root = stack.pop();
            this.list.push(root.val);
            root = root.right;
        }
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.list.shift();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.list.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */