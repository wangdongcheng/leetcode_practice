// 106. Construct Binary Tree from Inorder and Postorder Traversal
// Given inorder and postorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

const tree = require("../module/binary_tree");

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (inorder.length === 0 && postorder.length === 0) return null;

    let root = new tree.TreeNode(postorder[postorder.length - 1]),
        rootIdx = inorder.indexOf(root.val),
        leftInOrder = [],
        rightInOrder = [],
        leftPostOrder = [],
        rightPostOrder = [];

    for (let i = 0; i < rootIdx; i++) {
        leftInOrder.push(inorder[i]);
        leftPostOrder.push(postorder[postorder.indexOf(inorder[i])]);
    }
    root.left = buildTree(leftInOrder, leftPostOrder);
    for (let i = rootIdx + 1; i < inorder.length; i++) {
        rightInOrder.push(inorder[i]);
        rightPostOrder.push(postorder[postorder.indexOf(inorder[i])]);
    }
    root.right = buildTree(rightInOrder, rightPostOrder);

    return root;
};

console.log(buildTree([9,3,15,20,7],[9,15,7,20,3]), tree.getTreeFromLayerOrderArray([3,9,20,null,null,15,7]));