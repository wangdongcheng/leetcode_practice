// 105. Construct Binary Tree from Preorder and Inorder Traversal
// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (inorder.length === 0 || preorder.length === 0) return null;

    let root = new TreeNode(preorder[0]),
        rootIdx = inorder.indexOf(root.val),
        leftInOrder = [],
        rightInOrder = [],
        leftPreOrder = [],
        rightPreOrder = [],
        valIdx = [];

    for (let i = 0; i < rootIdx; i++) {
        leftInOrder.push(inorder[i]);
        valIdx.push(preorder.indexOf(inorder[i]));
    }
    valIdx.sort(function (a, b) { return a - b; });
    for (let i in valIdx) {
        leftPreOrder.push(preorder[valIdx[i]]);
    }

    valIdx = [];
    for (let i = rootIdx + 1; i < inorder.length; i++) {
        rightInOrder.push(inorder[i]);
        valIdx.push(preorder.indexOf(inorder[i]));
    }
    valIdx.sort(function (a, b) { return a - b; });
    for (let i in valIdx) {
        rightPreOrder.push(preorder[valIdx[i]]);
    }

    if (leftInOrder.length != 0) root.left = buildTree(leftPreOrder, leftInOrder);
    if (rightInOrder.length != 0) root.right = buildTree(rightPreOrder, rightInOrder);

    return root;
};

