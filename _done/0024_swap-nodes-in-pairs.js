// 24. Swap Nodes in Pairs
// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example:
// Given 1->2->3->4, you should return the list as 2->1->4->3.

const list = require("../module/list");
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head && !head.next) return head;
    if (head && head.next) {
        let ret = head.next;
        head.next = swapPairs(head.next.next);
        ret.next = head;
        return ret;
    }
    return null;
};

const log = arr => {
    console.log(list.getArrayFromList(swapPairs(list.getListFromArray(arr))));
}

log([1, 2, 3, 4, 5]);
log([3, 2, 1, 2, 3, 4, 3, 2, 4, 5]);
log([]);
