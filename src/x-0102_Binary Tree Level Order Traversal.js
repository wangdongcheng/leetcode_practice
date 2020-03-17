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
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ret = [];
    
    // rootArr is the array of tree nodes    
    const treeNodetoArr = (rootArr) => {
        let retRow = [],
            nextRootArr = [];
        
        for (let i=0;i<rootArr.length;i++){
            if(rootArr[i]){
                retRow.push(rootArr[i].val);
                ret.push(retRow);
                if(rootArr[i].left){
                    nextRootArr.push(rootArr[i].left);
                }else if (rootArr[i].right) {
                    nextRootArr.push(rootArr[i].right);
                }
            }
        }
        treeNodetoArr(nextRootArr);
    }            
            
    
    treeNodetoArr([root]);
    return ret;
    
};

console.log("dd");