/**
  * 
  * @param root TreeNode类 
  * @return int整型
  */
 function maxPathSum( root ) {
    // write code here
    let max = -99999;
    
    function maxPathCount(node) {
        if (!node) {
            return 0;
        }
        let left = Math.max(maxPathCount(node.left), 0);
        let right = Math.max(maxPathCount(node.right), 0);
        max = Math.max(max, node.val + left + right);
        return Math.max(node.val + left, node.val + right);
    }
    
    maxPathCount(root);
    return max;
}
module.exports = {
    maxPathSum : maxPathSum
};