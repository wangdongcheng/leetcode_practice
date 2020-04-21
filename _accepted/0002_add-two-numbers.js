// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
let getArrayFromList = (node) => {
    let a = [];
    while (node) {
        a.push(node.val);
        node = node.next;
    }
    return a;
}

let getListFromArray = (a) => {
    let dummy = new ListNode();
    let pre = dummy;
    a.forEach(x => pre = pre.next = new ListNode(x));
    return dummy.next;
}

let sumTwoArray = (arr1, arr2) => {
    let longLen = arr1.length > arr2.length ? arr1.length : arr2.length;
    let sum = 0,
        remain = 0,
        sumArr = [longLen];

    for (let i = 0; i < longLen; i++) {
        sum = (i < arr1.length ? arr1[i] : 0) + (i < arr2.length ? arr2[i] : 0) + remain;
        remain = sum < 10 ? 0 : 1;
        sumArr[i] = (sum < 10 ? sum : sum - 10);
    }
    if (remain > 0) {
        sumArr.push(remain);
    }

    return sumArr;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let arr1 = getArrayFromList(l1),
        arr2 = getArrayFromList(l2),
        sumArr = sumTwoArray(arr1, arr2);

    return getListFromArray(sumArr);

};

console.log(sumTwoArray([2, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], [5, 6, 4]).join() === [7, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2].join());
console.log(sumTwoArray([5], [5]).join() === [0, 1].join());