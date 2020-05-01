// 234. Palindrome Linked List
// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    let mid = 0;
    const len = arr.length;
    const mod = (len - 1) % 2;
    mid = Math.floor((arr.length - 1) / 2);
    for (i = 0; i <= mid; i++) {
        if (arr[mid + mod + i] != arr[mid - i]) {
            return false;
        }
    }
    return true;
};

const test = (arr, ans) => {
    console.log(isPalindrome(ln.getListFromArray(arr)), ans);
}

test([1, 2, 1], true);
test([1, 2, 1, 1, 2, 1], true);