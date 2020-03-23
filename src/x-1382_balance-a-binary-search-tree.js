const tree = require("../module/binary_tree");
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function (root) {
    let treeArr = [];

    const travel = root => {
        if (root) {
            travel(root.left);
            treeArr.push(root.val);
            travel(root.right);
        }
    }
    travel(root);
    treeArr.sort((a, b) => a - b);

    const buildTree = arr => {
        if (arr.length === 0) return null;
        if (arr.length === 1) return new tree.TreeNode(arr[0]);

        let balanceTree = new tree.TreeNode();
        balanceTree.val = arr[1];
        let leftArr = [];
        leftArr.push(arr[0]);
        balanceTree.left = buildTree(leftArr);
        let rightArr = arr.splice(2, arr.length - 1);
        balanceTree.right = buildTree(rightArr);

        return balanceTree;
    }

    return buildTree(treeArr);
};

const log = arr => {
    console.log(tree.getLayerOrderArrayFromTree(balanceBST(tree.getTreeFromLayerOrderArray(arr))));
}

log([1, null, 2, null, 3, null, 4, null, null]);

// 输入:
// [1,null,15,14,17,7,null,null,null,2,12,null,3,9,null,null,null,null,11]
// 输出
// [2,1,7,null,null,3,11,null,null,9,14,null,null,12,17,null,null,15]
// 预期结果
// [9,2,14,1,3,11,15,null,null,null,7,null,12,null,17]