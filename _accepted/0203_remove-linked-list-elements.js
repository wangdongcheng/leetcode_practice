// 203. Remove Linked List Elements
// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const ln = require("../module/list");
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let node = new ln.ListNode();  // add empty head node
    node.next = head;
    head = node;
    while (head) {
        if (head.next && head.next.val === val) {
            head.next = head.next.next;
            continue;
        }
        head = head.next;
    }
    return node.next;
};

const test = (arr, val, ans) => {
    console.log(ln.getArrayFromList(removeElements(ln.getListFromArray(arr), val)).join(",") === ans.join(","));
}

test([1, 2, 3, 4, 5, 6], 1, [2, 3, 4, 5, 6]);
test([1, 2, 3, 4, 5, 6], 6, [1, 2, 3, 4, 5]);
test([1, 1], 1, []);
test([], 1, []);
test([1, 2, 2, 1], 2, [1, 1]);