// 141. Linked List Cycle
// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Follow up:
// Can you solve it using O(1) (i.e. constant) memory?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// tags: 奇思妙想 双指针 快慢指针

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    while (head) {
        if (head.val !== "notNumber") {
            head.val = "notNumber";
            head = head.next;
        } else {
            return true;
        }
    }
    return false;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let slow = head;
    let fast = head;
    while (slow && fast && slow.next && fast.next) {
        slow = slow.next;
        if (!fast.next.next) break;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
};