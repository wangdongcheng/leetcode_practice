// 106. Construct Binary Tree from Inorder and Postorder Traversal
// Given inorder and postorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

const tree = require("../module/binary_tree");

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) return null;

    let root = new tree.TreeNode(postorder[postorder.length - 1]),
        rootIdx = inorder.indexOf(root.val),
        leftInOrder = [],
        rightInOrder = [],
        leftPostOrder = [],
        rightPostOrder = [],
        valIdx = [];

    for (let i = 0; i < rootIdx; i++) {
        leftInOrder.push(inorder[i]);
        valIdx.push(postorder.indexOf(inorder[i]));
    }
    valIdx.sort(function (a, b) { return a - b; });
    for (let i in valIdx) {
        leftPostOrder.push(postorder[valIdx[i]]);
    }

    valIdx = [];
    for (let i = rootIdx + 1; i < inorder.length; i++) {
        rightInOrder.push(inorder[i]);
        valIdx.push(postorder.indexOf(inorder[i]));
    }
    valIdx.sort(function (a, b) { return a - b; });
    for (let i in valIdx) {
        rightPostOrder.push(postorder[valIdx[i]]);
    }

    if (leftInOrder.length != 0) root.left = buildTree(leftInOrder, leftPostOrder);
    if (rightInOrder.length != 0) root.right = buildTree(rightInOrder, rightPostOrder);

    return root;
};

// console.log(buildTree([9,3,15,20,7],[9,15,7,20,3]), tree.getTreeFromLayerOrderArray([3,9,20,null,null,15,7]));
console.log(tree.getLayerOrderArrayFromTree(buildTree([25, 13, 16, -50, 77, -58, 68, 24, 29, 76, 33, 93, -12, -75], [25, 13, -50, -58, 77, 16, 24, 76, 29, 93, -75, -12, 33, 68])), [68, 16, 33, 13, 77, 29, -12, 25, null, -50, -58, 24, 76, 93, -75]);
// [-80,25,98,13,16,79,-59,-49,-50,-83,6,-96,85,-36,77,20,55,23,92,72,-58,-6,14,-76,-46,41,-37,17,64,88,-73,-85,-52,30,75,19,-42,-55,87,80,59,-27,-81,1,44,-14,84,-10,-60,-34,91,-87,31,42,5,-18,38,86,-25,74,22,-7,-90,56,-72,32,-24,50,-13,-71,83,60,34,-20,49,58,53,-4,-89,78,27,-21,-16,-54,67,-1,21,11,-22,81,40,-92,-29,89,-95,-48,47,-23,-3,-19,61,-99,4,48,-63,-79,-30,-100,54,-70,94,39,-9,-41,-82,15,-98,-15,-97,-43,-64,43,97,51,82,68,96,-5,36,28,35,-69,65,24,-74,57,66,-94,-88,18,37,0,29,9,76,-61,33,69,-39,3,-44,90,-65,95,-26,2,93,-78,-84,-17,-12,-66,-75,-40,99,73,-57,7,26,-68,8,12,-8,62,46,-51,-67,-47,-2,52,-77,-86,10,-38,-93,-35,45,-31,-91,63,71,-28,-53,-56,-32,-33,-45,70,-62,-11]
// [-80,98,25,13,79,-49,-59,6,-83,-96,-36,85,-50,20,23,92,55,72,-6,-76,14,41,64,17,-73,-85,30,-52,75,88,-37,87,59,-27,80,1,-81,-55,44,-42,-14,19,-46,-60,-34,-87,31,91,-10,-18,38,-25,74,86,5,42,-90,-7,22,-72,32,56,50,-71,-13,-24,60,-20,34,58,-4,78,-16,-21,-54,27,-89,53,49,83,-1,21,81,40,-29,89,-92,-22,11,47,-23,-19,-3,-48,-99,61,-95,48,-79,-100,54,-70,39,-9,-82,-41,94,-30,15,-63,-15,-97,43,97,-64,51,-43,-98,4,67,84,82,-58,77,16,96,36,35,-69,65,28,-5,-74,57,18,-88,0,37,-94,66,24,9,-61,76,29,3,-39,90,-65,-44,2,-26,95,69,-17,-84,-78,93,-66,-40,99,-57,-68,26,7,73,46,62,-8,12,-47,-67,-2,-51,-86,10,45,-35,-93,-38,-31,-77,63,71,-91,-28,-56,-33,-32,70,-11,-62,-45,-53,52,8,-75,-12,33,68]
// [68,16,33,13,77,29,-12,25,null,-50,-58,24,76,93,-75,-80,98,-59,85,72,82,-5,66,9,-61,69,-78,-66,8,null,null,null,null,79,-49,-96,-36,55,null,84,null,96,28,57,-94,null,null,null,null,null,95,null,-84,null,null,73,52,null,null,null,null,-83,null,null,null,20,92,-46,67,null,null,36,65,-74,null,null,37,-44,-26,null,-17,99,7,-51,-53,null,6,null,null,23,null,14,19,83,4,null,null,-69,null,null,null,-88,0,-39,-65,null,2,null,null,-40,null,-57,26,12,-2,-28,-45,null,null,null,null,-6,-76,-37,-14,-24,49,-95,-98,35,null,null,18,null,null,null,3,90,null,null,null,null,null,null,null,null,-68,null,-8,-67,null,-91,null,-32,-62,null,null,null,null,41,88,-42,null,56,-13,34,53,11,61,-63,-43,null,null,null,null,null,null,null,null,null,null,null,62,null,-47,-77,71,-56,-33,70,-11,null,null,17,75,null,44,22,32,50,-71,60,-20,58,-89,21,-22,-48,-99,48,15,-97,51,null,46,null,null,null,-31,63,null,null,null,null,null,null,null,null,null,null,64,-52,null,-55,null,42,-7,-72,null,null,null,null,null,null,null,null,null,null,null,-4,27,-1,null,null,-92,null,-3,null,null,null,null,-30,null,-15,null,-64,null,null,null,-38,null,null,null,null,null,-85,30,null,-81,-10,5,null,-90,null,null,null,null,78,-54,null,null,40,89,-23,-19,-79,94,null,null,null,97,10,-93,-73,null,null,null,80,1,null,91,null,86,null,null,null,null,-21,null,81,null,-29,null,47,null,null,null,null,null,-70,-41,43,null,-86,null,null,-35,null,null,87,-27,null,null,-34,31,38,74,null,-16,null,null,null,null,null,null,54,null,-9,-82,null,null,null,null,null,45,null,null,59,null,-60,null,-87,null,-18,null,-25,null,null,null,-100,null,39]