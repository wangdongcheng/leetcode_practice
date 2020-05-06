// 572. Subtree of Another Tree
// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s.
// A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

// Example 1:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4 
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.
// Example 2:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const tree = require("../module/binary_tree");
const serialize = root => {
    if (!root) {
        return ".";
    }
    return `${root.val}<${serialize(root.left)}>${serialize(root.right)}`;

};
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    const strs = serialize(s);
    const strt = serialize(t);
    const num = '0123456789';
    return strs.indexOf(strt) !== -1 && num.indexOf(strs[strs.indexOf(strt) - 1]) === -1;
};

const test = (arrs, arrt, ans) => {
    console.log(isSubtree(tree.getTreeFromLayerOrderArray(arrs), tree.getTreeFromLayerOrderArray(arrt)), ans);
}

test([12], [2], false);
test([3, 4, 5, 2, 2], [4, 1, 2], false);
test([3, 4, 5, 1, 2], [4, 1, 2], true);