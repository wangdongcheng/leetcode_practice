// 19. Remove Nth Node From End of List
// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.

// Note:
// Given n will always be valid.

// Follow up:
// Could you do this in one pass?

// tags: 双指针

const ln = require("../module/list");
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let node = nh = head;
    for (let i = 1; i <= n; i++) {
        nh = nh.next;
    }
    if (!nh) return node.next;
    while (nh.next) {
        nh = nh.next;
        head = head.next;
    }
    head.next = head.next.next;
    return node;
};

const test = (arr, n, ans) => {
    console.log(ln.getArrayFromList(removeNthFromEnd(ln.getListFromArray(arr), n)), ans);
}

test([1, 2, 3, 4, 5], 2, [1, 2, 3, 5]);
test([1], 1, []);
test([1, 2, 3, 4], 4, [2, 3, 4]);