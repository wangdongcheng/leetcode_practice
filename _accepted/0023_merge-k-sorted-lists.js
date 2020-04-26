// 23. Merge k Sorted Lists
// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

// Example:

// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const ln = require("../module/list");

const merge = (left, right) => {
    let head = node = new ln.ListNode();
    while (left && right) {
        node = node.next = new ln.ListNode();
        if (left.val <= right.val) {
            node.val = left.val;
            left = left.next;
        } else if (left.val > right.val) {
            node.val = right.val;
            right = right.next;
        }
    }
    if (!left) {
        node.next = right;
    } else if (!right) {
        node.next = left;
    }
    return head.next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (!lists.length) return null;
    if (lists.length === 1) return lists[0];
    const mid = Math.floor((lists.length) / 2);
    let l = lists.slice(0, mid);
    let r = lists.slice(mid);
    return merge(mergeKLists(l), mergeKLists(r));
};

const test = (arr, ans) => {
    let lnArr = [];
    arr.forEach(val => {
        const node = ln.getListFromArray(val);
        lnArr.push(node);
    })
    console.log(ln.getArrayFromList(mergeKLists(lnArr)).join("_") === ans.join("_"));
}

test([[1, 4, 5], [1, 3, 4], [2, 6]], [1, 1, 2, 3, 4, 4, 5, 6]);
test([[1, 2], [4, 5], [1, 6], [1, 9]], [1, 1, 1, 2, 4, 5, 6, 9]);