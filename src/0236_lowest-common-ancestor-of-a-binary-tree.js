// 236. Lowest Common Ancestor of a Binary Tree
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]

// check pic ../resource/lowest-common-ancestor-of-a-binary-tree.png

// Example 1:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.
// Example 2:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

// Note:

// All of the nodes' values will be unique.
// p and q are different and both values will exist in the binary tree.

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let parMap = new Map(),
        nodeArr = [];

    parMap.set(root.val, null);
    const travel = root => {
        if (root) {
            nodeArr.push(root);
            if (root.left) parMap.set(root.left.val, root.val);
            if (root.right) parMap.set(root.right.val, root.val);
            travel(root.left);
            travel(root.right);
        }
    }

    travel(root);

    const findPar = (map, val) => {
        let parArr = [];
        parArr.push(val);
        while (map.has(val)) {
            parArr.push(map.get(val));
            val = map.get(val);
        }
        return parArr;
    }

    let pParArr = findPar(parMap, p.val),
        qParArr = findPar(parMap, q.val),
        commPar;

    loop: {
        for (let i = 0; i < pParArr.length; i++) {
            for (let j = 0; j < qParArr.length; j++) {
                if (pParArr[i] === qParArr[j]) {
                    commPar = pParArr[i];
                    break loop;
                }
            }
        }
    }

    for (let i = 0; i < nodeArr.length; i++) {
        if (nodeArr[i].val === commPar) return nodeArr[i];
    }
};

console.log(lowestCommonAncestor(
    tree.getTreeFromLayerOrderArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]),
    tree.getTreeFromLayerOrderArray([5, 6, 2, null, null, 7, 4]),
    tree.getTreeFromLayerOrderArray([1, 0, 8])
).val);

console.log(lowestCommonAncestor(
    tree.getTreeFromLayerOrderArray([3, 5, 1, 6, 2, 0, 8, null, 98, 87, 45, 21, 36, 96, 85, 52, 41, 74, null, 7, 4]),
    tree.getTreeFromLayerOrderArray([36]),
    tree.getTreeFromLayerOrderArray([8, 96, 85])
).val);