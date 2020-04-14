// 445. Add Two Numbers II
// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Follow up:
// What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

// Example:

// Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 8 -> 0 -> 7
const ln = require("../module/list");
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let st1 = [];
    let st2 = [];

    while (l1) {
        st1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        st2.push(l2.val);
        l2 = l2.next;
    }
    let prev = new ln.ListNode(null);
    let l = new ln.ListNode(null);
    let left = 0;
    while (st1.length || st2.length) {
        let val1 = st1.length ? st1.pop() : 0;
        let val2 = st2.length ? st2.pop() : 0;
        let sum = val1 + val2 + left <= 9 ? val1 + val2 + left : val1 + val2 + left - 10;
        left = val1 + val2 + left <= 9 ? 0 : 1;
        prev.val = sum;
        l = new ln.ListNode();
        l.next = prev;
        prev = l;
    }
    if (left === 1) {
        l.val = 1;
        return l;
    } else {
        return l.next;
    }
};

const log = (arr1, arr2, expected) => {
    console.log(ln.getArrayFromList(addTwoNumbers(ln.getListFromArray(arr1), ln.getListFromArray(arr2))));
    console.log(expected);
}
log([7, 2, 4, 3], [5, 6, 4], [7, 8, 0, 7]);
log([1, 5, 3, 2, 1, 4, 5, 6, 7, 8, 9], [4, 5, 6, 7, 9, 6, 5, 4, 3, 2, 4], [6, 1, 0, 0, 1, 1, 1, 1, 1, 1, 3]);
log([5], [5], [1, 0]);