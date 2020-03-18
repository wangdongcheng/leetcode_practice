// 101. Symmetric Tree
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

// Note:
// Bonus points if you could solve it both recursively and iteratively.

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
var isSymmetric = function(root) {

};

1,2,2,null,3,null,3 -> false
1,2,2,3,4,4,3 -> true
1,2,2,3,4,4,3,1,5,9,7,7,9,5,1 -> true
[2,3,3,4,5,null,4] -> false
[4,-57,-57,null,67,67,null,null,-97,-97] -> true