// 206. Reverse Linked List
// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

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
var reverseList = function (head) {
    // way 1. Easy to understand and already AC
    if (false) {
        if (!head) return null;

        let nodeArr = [];

        while (head) {
            nodeArr.push(head.val);
            head = head.next;
        }

        let ret = node = new list.ListNode(nodeArr[nodeArr.length - 1]);

        for (let i = nodeArr.length - 2; i >= 0; i--) {
            node.next = new list.ListNode(nodeArr[i]);
            node = node.next;
        }

        return ret;
    }

    // way 2. Try recursion way
    if (!head) return null;
    if (head && !head.next) return head;
    if (head && head.next) {
        let ret = node = reverseList(head.next);
        while (node.next) {
            node = node.next;
        }
        node.next = head;
        head.next = null;

        return ret;
    }
};

const log = arr => {
    console.log(list.getArrayFromList(reverseList(list.getListFromArray(arr))));
}

log([1, 2, 3, 4, 5, 6, 7, 5, 3, 34, 5, 6, 3]);
log([]);
log([33,44]);