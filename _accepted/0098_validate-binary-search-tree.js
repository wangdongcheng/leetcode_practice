// 98. Validate Binary Search Tree
// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

const tree = require("../module/binary_tree")
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    let treeArr = [];

    const travel = (root) => {
        if (root) {
            travel(root.left);
            treeArr.push(root.val);
            travel(root.right);
        }
    }

    travel(root);

    for (let i = 1; i < treeArr.length; i++) {
        if (treeArr[i] <= treeArr[i - 1]) {
            return false;
        }
    }
    return true;
};

const test = (arr, ans) => {
    console.log(isValidBST(tree.getTreeFromLayerOrderArray(arr)), ans);
}

test([0, -1], true);
test([5, 1, 4, null, null, 3, 6], false);
test([1, null, 1], false);
test([10, 5, 15, null, null, 6, 20], false);
test([], true);