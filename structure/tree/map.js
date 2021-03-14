/**
 * @file 遍历二叉树
 * @author caixiaowen
 */

// ==============================前序遍历========================================

/**
 * 前序遍历（递归）
 * 耗时88ms，内存消耗38.9M
 *
 * @param {*} root 
 */
const preMapIter = root => {
    if (!root) {
        return [];
    }

    let arr = [];
    arr.push(root.val);
    root.left && (arr = arr.concat(preMapIter(root.left)));
    root.right && (arr = arr.concat(preMapIter(root.right)));

    return arr;
};



/**
 * 前序遍历（非递归）
 * 耗时80ms，内存消耗38M
 *
 * @param {*} root 
 */
const preMapNotIter = root => {
    if (!root) {
        return [];
    }

    let arr = [];
    let stack = [root];
    while (stack.length) {
        let node = stack.pop();
        node.val && arr.push(node.val);
        // 注意栈是先进后出，所以左节点要先出，右节点就要先进
        node.right && stack.push(node.right);
        node.left && stack.push(node.left);
    }

    return arr;
};

// ==============================中序遍历========================================

/**
 * 中序遍历（迭代）
 * 耗时90ms，内存消耗38M
 *
 * @param {*} root 
 */
const midMapIter = root => {
    if (!root) {
        return [];
    }

    let arr = [];
    root.left && (arr = arr.concat(midMapIter(root.left)));
    arr.push(root.val);
    root.right && (arr = arr.concat(midMapIter(root.right)));

    return arr;
};

/**
 * 中序遍历（非迭代）
 * 耗时88ms，内存消耗37.8M
 *
 * @param {*} root 
 */
const midMapNotIter = root => {
    if (!root) {
        return [];
    }

    // 中序遍历与前序不太一样
    let arr = [];
    let stack = [];
    while (stack.length || root) {
        if (root) {
            stack.push(root);
            root = root.left;
        }
        else {
            root = stack.pop();
            arr.push(root.val);
            root = root.right;
        }
    }

    return arr;
};

// ==============================后序遍历========================================

/**
 * 后序遍历（递归）
 * 耗时100ms，内存消耗38.9M
 *
 * @param {*} root 
 */
const afterMapIter = root => {
    if (!root) {
        return [];
    }

    let arr = [];
    root.left && (arr = arr.concat(afterMapIter(root.left)));
    root.right && (arr = arr.concat(afterMapIter(root.right)));
    arr.push(root.val);

    return arr;
};

/**
 * 后序遍历（非递归）
 * 耗时76ms，内存消耗37.9M
 *
 * @param {*} root 
 */
const afterMapNotIter = root => {
    if (!root) {
        return [];
    }

    // 后序遍历可以是前序遍历的变化版
    let arr = [];
    let stack = [root];
    while (stack.length) {
        let node = stack.pop();
        // 把数组插入数据调整，就可以从前序变成后序
        arr.unshift(node.val);
        node.left && stack.push(node.left);
        node.right && stack.push(node.right);
    }

    return arr;
};


// ==============================层序遍历========================================

/**
 * 层次遍历，自底向上
 * 耗时72ms，内存消耗39.7M
 *
 * @param {*} root 
 */
const levelOrderBottom = root => {
    if (!root) {
        return [];
    }

    let result = [];

    function layerFind(node, depth) {
        if (!node) {
            return;
        }

        if (!result[depth]) {
            result[depth] = [];
        }
        result[depth].push(node.val);

        node.left && layerFind(node.left, depth + 1);
        node.right && layerFind(node.right, depth + 1);

    }
    layerFind(root, 0);

    return result.reverse();
};
