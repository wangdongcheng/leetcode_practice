// 145. Binary Tree Postorder Traversal
// Given a binary tree, return the postorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [3,2,1]
// Follow up: Recursive solution is trivial, could you do it iteratively?

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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let treeArr = [];
    
    const travel = (root) =>{
        if(root){
            travel(root.left);
            travel(root.right);
            treeArr.push(root.val);
        }
    }

    travel(root);
    return treeArr;
};

console.log(postorderTraversal(tree.getTreeFromLayerOrderArray([68,16,33,13,77,29,-12,25,null,-50,-58,24,76,93,-75])));