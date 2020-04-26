// 160. Intersection of Two Linked Lists
// Write a program to find the node at which the intersection of two singly linked lists begins.

// For example, the following two linked lists:

// begin to intersect at node c1.

// Example 1:
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
// Output: Reference of the node with value = 8
// Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.


// Example 2:
// Input: intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Reference of the node with value = 2
// Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [0,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

// Example 3:
// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: null
// Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
// Explanation: The two lists do not intersect, so return null.

// Notes:
// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.
// Your code should preferably run in O(n) time and use only O(1) memory.

// tags: 双指针

// 双指针法
// 创建两个指针 pApA 和 pBpB，分别初始化为链表 A 和 B 的头结点。然后让它们向后逐结点遍历。
// 当 pApA 到达链表的尾部时，将它重定位到链表 B 的头结点 (你没看错，就是链表 B); 类似的，当 pBpB 到达链表的尾部时，将它重定位到链表 A 的头结点。
// 若在某一时刻 pApA 和 pBpB 相遇，则 pApA/pBpB 为相交结点。
// 想弄清楚为什么这样可行, 可以考虑以下两个链表: A={1,3,5,7,9,11} 和 B={2,4,9,11}，相交于结点 9。 
// 由于 B.length (=4) < A.length (=6)，pBpB 比 pApA 少经过 22 个结点，会先到达尾部。将 pBpB 重定向到 A 的头结点，pApA 重定向到 B 的头结点后，pBpB 要比 pApA 多走 2 个结点。因此，它们会同时到达交点。
// 如果两个链表存在相交，它们末尾的结点必然相同。因此当 pApA/pBpB 到达链表结尾时，记录下链表 A/B 对应的元素。若最后元素不相同，则两个链表不相交。
// 复杂度分析

// 时间复杂度 : O(m+n)O(m+n)。
// 空间复杂度 : O(1)O(1)。

// 作者：LeetCode
// 链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/xiang-jiao-lian-biao-by-leetcode/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const ln = require("../module/list");
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNodeForceSearch = function (headA, headB) { // 暴力遍历
    const copyB = headB;
    while (headA) {
        while (headB) {
            if (headA === headB) {
                return headA;
            }
            headB = headB.next;
        }
        headA = headA.next;
        headB = copyB;
    }
    return null;
};

const getIntersectionNode = (headA, headB) => { // double-pointers, brilliant!
    const copyA = headA;
    const copyB = headB;
    while (headA != headB) {
        headA = headA ? headA.next : copyB;
        headB = headB ? headB.next : copyA;
    }
    return headA;
}

let nodeA = ln.getListFromArray([4, 1, 8, 4, 5]);
let nodeB = ln.getListFromArray([5, 0, 1]);
nodeB.next.next.next = nodeA.next.next;

console.log(ln.getArrayFromList(getIntersectionNode(nodeA, nodeB)));

nodeA = ln.getListFromArray([1, 4]);
nodeB = ln.getListFromArray([2, 3]);
console.log(ln.getArrayFromList(getIntersectionNode(nodeA, nodeB)));