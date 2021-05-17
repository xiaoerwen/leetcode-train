/**
 * @file 堂兄弟节点
 * @author xiaoerwen
 */

const isCousins = function(root, x, y) {
    if (!root) {
        return false;
    }

    let map = new Map();
    function deepMap(node, parentNode, depth) {
        if (!node) {
            return;
        }

        if (map.has(x) && map.has(y)) {
            return;
        }

        if (!map.has(x) && node.val === x) {
            map.set(x, {parentNode, depth});
        }

        if (!map.has(y) && node.val === y) {
            map.set(y, {parentNode, depth});
        }

        deepMap(node.left, node.val, depth + 1);
        deepMap(node.right, node.val, depth + 1);
    }

    deepMap(root, null, 0);

    if (map.has(x) && map.has(y)) {
        let xInfo = map.get(x);
        let yInfo = map.get(y);
        if (xInfo.parentNode !== yInfo.parentNode && xInfo.depth === yInfo.depth) {
            return true;
        }
    }

    return false;
};
