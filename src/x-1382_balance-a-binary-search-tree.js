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

console.log(tree.getLayerOrderArrayFromTree(balanceBST(tree.getTreeFromLayerOrderArray([1, null, 2, null, 3, null, 4, null, null]))));