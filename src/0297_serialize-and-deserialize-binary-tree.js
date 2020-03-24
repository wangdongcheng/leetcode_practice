// 297. Serialize and Deserialize Binary Tree
// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Example: 

// You may serialize the following tree:

//     1
//    / \
//   2   3
//      / \
//     4   5

// as "[1,2,3,null,null,4,5]"
// Clarification: The above format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

// Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.

const tree = require("../module/binary_tree");

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) {
        return ".";
    }
    return `${root.val}<${serialize(root.left)}>${serialize(root.right)}`;

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data.length === 0 || data === ".") return null;

    let numStr = "",
        root = new tree.TreeNode(),
        bal = 0,
        leftIdx = 0,
        rightIdx = 0,
        leftTreeSer = "",
        rightTreeSer = "";

    for (let i = 0; i < data.length; i++) {
        if (data[i] === "<" || data[i] === ">") {
            if (numStr != "END") {
                if (numStr != ".") {
                    root.val = parseInt(numStr);
                } else {
                    return root;
                }
                numStr = "END";
            }

            if (data[i] === "<") {
                bal++;
                if (leftIdx === 0) leftIdx = i + 1;
            } else if (data[i] === ">") {
                bal--;
            }

            if (bal === 0 && rightIdx === 0) rightIdx = i + 1;

        } else if (numStr != "END") {
            numStr += data[i];
        }
    }
    leftTreeSer = data.substring(leftIdx, rightIdx - 1);
    rightTreeSer = data.substring(rightIdx, data.length);

    root.left = deserialize(leftTreeSer);
    root.right = deserialize(rightTreeSer);

    return root;
};

const log = arr => {
    console.log(tree.getLayerOrderArrayFromTree(deserialize(serialize(tree.getTreeFromLayerOrderArray(arr)))));
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

log([3, -5, 1, 6, 2, 0, 8, null, 98, 87, 45, 21, 36, 96, 85, 52, -41, 74, null, 7, 4]);
log([3, 5, 1, 6, 2, 0, 8, null, 98, 87, 45, 21, 36, 96, 85, 52, 41, 74, null, 7, 4]);
log([]);
log([1, 2, 3, null, null, 4, 5]);
log([1, null, 2, null, 3, null, 3, 5, 6, 7]);

