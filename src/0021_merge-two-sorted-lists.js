// 21. Merge Two Sorted Lists
// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

const list = require("../module/list")

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let head = new list.ListNode(),
        ret = head;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            head.next = new list.ListNode(l1.val);
            l1 = l1.next;
        } else {
            head.next = new list.ListNode(l2.val);
            l2 = l2.next;
        }
        head = head.next;
    }
    while (l1 || l2) {
        if (l1) {
            head.next = new list.ListNode(l1.val);
            l1 = l1.next;
        } else if (l2) {
            head.next = new list.ListNode(l2.val);
            l2 = l2.next;
        }
        head = head.next;
    }

    return ret.next;
};

const log = (arr1, arr2) => {
    console.log(list.getArrayFromList(mergeTwoLists(list.getListFromArray(arr1), list.getListFromArray(arr2))));
}

log([1, 2, 3, 4], [3, 4, 5, 6]);
log([22, 33, 44], [2, 3, 4, 5, 6, 7, 8, 99]);