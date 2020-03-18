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

const tree = require("../module/binary_tree.js");

var isSymmetric = function (root) {
    if (!root) return true;

    let treeArrL = [],
        treeArrR = [];

    let treeObj = function () {
        val = 0;
        hasOuter = true;
        hasInner = true;
    }

    const travel = (root, direction) => {
        let obj = new treeObj();
        if (root) {
            obj.val = root.val;
            if (direction === "L") {
                if (root.left) obj.hasOuter = true;
                if (root.right) obj.hasInner = true;
            } else if (direction === "R") {
                if (root.right) obj.hasOuter = true;
                if (root.left) obj.hasInner = true;
            }
        }

        if (direction === "L") {
            treeArrL.push(obj);
            if (root.left) travel(root.left, "L");
            if (root.right) travel(root.right, "L");

        } else if (direction === "R") {
            treeArrR.push(obj);
            if (root.right) travel(root.right, "R");
            if (root.left) travel(root.left, "R");
        }

    }

    if (root.left) travel(root.left, "L");
    if (root.right) travel(root.right, "R");

    if (treeArrL.length != treeArrR.length) {
        return false;
    } else {
        for (let i = 0; i < treeArrL.length; i++) {
            if (treeArrL[i].val === treeArrR[i].val && treeArrL[i].hasInner === treeArrR[i].hasInner && treeArrL[i].hasOuter === treeArrR[i].hasOuter) {
            } else {
                return false;
            }
        }
    }

    return true;

};


console.log(isSymmetric(tree.getTreeFromLayerOrderArray([1, 0])), false);
console.log(isSymmetric(tree.getTreeFromLayerOrderArray([1, 2, 2, null, 3, null, 3])), false);
console.log(isSymmetric(tree.getTreeFromLayerOrderArray([1, 2, 2, 3, 4, 4, 3])), true);
console.log(isSymmetric(tree.getTreeFromLayerOrderArray([1, 2, 2, 3, 4, 4, 3, 1, 5, 9, 7, 7, 9, 5, 1])), true);
console.log(isSymmetric(tree.getTreeFromLayerOrderArray([2, 3, 3, 4, 5, null, 4])), false);
console.log(isSymmetric(tree.getTreeFromLayerOrderArray([4, -57, -57, null, 67, 67, null, null, -97, -97])), true)