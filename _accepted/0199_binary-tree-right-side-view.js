// 199. Binary Tree Right Side View
// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const tree = require("../module/binary_tree");
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];
    let que = [root];
    let trvl = [[root.val]];
    while (que.length) {
        const len = que.length;
        let row = [];
        for (let i = 0; i < len; i++) {
            const curr = que.shift();
            if (curr.right) {
                que.push(curr.right);
                row.push(curr.right.val);
            }
            if (curr.left) {
                que.push(curr.left);
                row.push(curr.left.val);
            }
        }
        if (row.length) trvl.push(row);
    }
    let ret = [];
    trvl.forEach(row => {
        ret.push(row[0]);
    })
    return ret;
};

const test = (arr, ans) => {
    console.log(rightSideView(tree.getTreeFromLayerOrderArray(arr)), ans);
}

test([1, 2, 3, null, 5, null, 4], [1, 3, 4]);
test([1, 81, 5, 6, 9, 8, 5, 2, 6, 6, 4, 5, 5, 7, 1, 2, 5, 4, null, 58, 9], [1, 5, 5, 1, 9]);