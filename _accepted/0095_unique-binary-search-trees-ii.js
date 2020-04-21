// 95. Unique Binary Search Trees II
// Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.

// Example:

// Input: 3
// Output:
// [
//   [1,null,3,2],
//   [3,2,null,1],
//   [3,1,null,null,2],
//   [2,1,3],
//   [1,null,2,null,3]
// ]
// Explanation:
// The above output corresponds to the 5 unique BST's shown below:

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3

const tree = require("../module/binary_tree");
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {

    const buildTreeArr = (arr) => {
        let treeArr = [],
            t = new tree.TreeNode();

        if (!arr.length) {
            return [];
        } else if (arr.length === 1) {
            t.val = arr[0];
            treeArr.push(t);
            return treeArr;
        } else if (arr.length === 2) {
            t.val = arr[1];
            t.left = new tree.TreeNode(arr[0]);
            treeArr.push(t);
            t = new tree.TreeNode(arr[0]);
            t.right = new tree.TreeNode(arr[1]);
            treeArr.push(t);
            return treeArr;
        }

        arr.forEach((val, idx, array) => {
            let leftTreeArr = buildTreeArr(array.slice(0, idx));
            let rightTreeArr = buildTreeArr(array.slice(idx + 1, array.length));

            if (leftTreeArr.length && rightTreeArr.length) {
                leftTreeArr.forEach(leftNode => {
                    rightTreeArr.forEach(rightNode => {
                        t = new tree.TreeNode(val);
                        if (leftNode) t.left = leftNode;
                        if (rightNode) t.right = rightNode;
                        treeArr.push(t);
                    })
                });
            } else if (leftTreeArr.length && !rightTreeArr.length) {
                leftTreeArr.forEach(leftNode => {
                    t = new tree.TreeNode(val);
                    if (leftNode) t.left = leftNode;
                    treeArr.push(t);
                });
            } else if (!leftTreeArr.length && rightTreeArr.length) {
                rightTreeArr.forEach(rightNode => {
                    t = new tree.TreeNode(val);
                    if (rightNode) t.right = rightNode;
                    treeArr.push(t);
                });
            }
        })
        return treeArr;
    }

    let nArr = [];
    for (let i = 1; i <= n; i++) {
        nArr.push(i);
    }
    return buildTreeArr(nArr);
};

const log = n => {
    console.log(generateTrees(n).length);
    generateTrees(n).forEach(val => {
        console.log(tree.getLayerOrderArrayFromTree(val));
    });
}

log(3);
log(4);