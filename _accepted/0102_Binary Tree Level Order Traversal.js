// 102. Binary Tree Level Order Traversal
// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// Definition for a binary tree node.
const TreeNode = function (val) {
    this.val = val;
    this.left = this.right = null;
}

const getTreeFromLayerOrderArray = array => {
    let n = array.length;
    if (!n) return null;
    let index = 0;
    let root = new TreeNode(array[index++]);
    let queue = [root];
    while (index < n) {
        let top = queue.shift();
        let v = array[index++];
        top.left = v == null ? null : new TreeNode(v);
        if (index < n) {
            let v = array[index++];
            top.right = v == null ? null : new TreeNode(v);
        }
        if (top.left) queue.push(top.left);
        if (top.right) queue.push(top.right);
    }
    return root;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if(!root) return [];
    
    let ret = [],
        retArr = [],
        curr = [],
        que = [root],
        len = 0;

    while (que.length != 0) {
        len = que.length;
        ret = [];
        for (let i = 0; i < len; i++) {
            curr = que.shift();
            ret.push(curr.val);
            if (curr.left) que.push(curr.left);
            if (curr.right) que.push(curr.right);
        }
        retArr.push(ret);
    }

    return retArr;

};

let root = getTreeFromLayerOrderArray([3, 9, 20, null, null, 15, 7]);
console.log(levelOrder(root));
root = getTreeFromLayerOrderArray([]);
console.log(levelOrder(root));
