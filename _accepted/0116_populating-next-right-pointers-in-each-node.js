// 116. Populating Next Right Pointers in Each Node
// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

// Follow up:

// You may only use constant extra space.
// Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.

// Example 1:
// check pic in ../resource/populating-next-right-pointers-in-each-node.png

// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

// Constraints:

// The number of nodes in the given tree is less than 4096.
// -1000 <= node.val <= 1000

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return root;
    
    let curr = new Node(),
        que = [root],
        len = 0;

    while (que.length != 0) {
        len = que.length;
        
        for (let i = 0; i < len; i++) {
            curr = que.shift();
            if (curr.left) que.push(curr.left);
            if (curr.right) que.push(curr.right);
        }
        que.forEach(function next(node,idx,arr){
            if(arr[idx+1]) node.next = arr[idx+1];
        })
    }

    return root;
}