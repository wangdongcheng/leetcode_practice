// 112. Path Sum
// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {

    if (!root) {
        return false;
    } else if (!root.left && !root.right && root && root.val === sum) {
        return true;
    } else if (!root.left && !root.right && root.val != sum) {
        return false;
    } else {
        return ((root.left ? hasPathSum(root.left, sum - root.val) : false) || (root.right ? hasPathSum(root.right, sum - root.val) : false));
    }
};

console.log(hasPathSum(tree.getTreeFromLayerOrderArray([]), 0), false);
console.log(hasPathSum(tree.getTreeFromLayerOrderArray([1, 2]), 1), false);
console.log(hasPathSum(tree.getTreeFromLayerOrderArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22), true);
console.log(hasPathSum(tree.getTreeFromLayerOrderArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 28), false);
console.log(hasPathSum(tree.getTreeFromLayerOrderArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1, 84, 3, -9, 2, 7, null, 1]), 13), true);
console.log(hasPathSum(tree.getTreeFromLayerOrderArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1, 84, 3, -9, 2, 7, null, 1]), 14), false);