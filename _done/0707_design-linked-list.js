// 707. Design Linked List
// Design your implementation of the linked list. You can choose to use the singly linked list or the doubly linked list. A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node. If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement these functions in your linked list class:

// get(index) : Get the value of the index-th node in the linked list. If the index is invalid, return -1.
// addAtHead(val) : Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
// addAtTail(val) : Append a node of value val to the last element of the linked list.
// addAtIndex(index, val) : Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
// deleteAtIndex(index) : Delete the index-th node in the linked list, if the index is valid.

// Example:
// Input: 
// ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
// [[],[1],[3],[1,2],[1],[1],[1]]
// Output:  
// [null,null,null,null,2,null,3]

// Explanation:
// MyLinkedList linkedList = new MyLinkedList(); // Initialize empty LinkedList
// linkedList.addAtHead(1);
// linkedList.addAtTail(3);
// linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
// linkedList.get(1);            // returns 2
// linkedList.deleteAtIndex(1);  // now the linked list is 1->3
// linkedList.get(1);            // returns 3

// Constraints:
// 0 <= index,val <= 1000
// Please do not use the built-in LinkedList library.
// At most 2000 calls will be made to get, addAtHead, addAtTail,  addAtIndex and deleteAtIndex.

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    this.size = 0;     // to design a data structure represents "a list of nodes", not just the single "node"
    this.head = null;  // the first node
};

var listNode = function (val) {
    this.val = val
    this.next = null
}
/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index >= this.size) {
        return -1;
    } else if (index === 0) {
        return this.head.val;
    } else {
        let nd = this.head;
        let i = 0;
        while (i < index) {
            nd = nd.next;
            i++;
        }
        return nd.val;
    }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const hd = this.head;
    const node = new listNode(val);
    this.head = node;
    this.head.next = hd;
    this.size++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const nt = new listNode(val);
    let i = 0;
    let nd = this.head;
    while (i < this.size - 1) {
        nd = nd.next;
        i++;
    }
    nd.next = nt;
    this.size++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size) {
        return void 0;
    } else {
        this.size++;
        if (index <= 0) {
            this.addAtHead(val);
        } else if (index == this.size) {
            this.addAtTail(val);
        } else {
            let i = 0;
            let nd = this.head;
            const ins = new listNode(val);
            while (i < index - 1) {
                nd = nd.next;
                i++;
            }
            const af = nd.next;
            nd.next = ins;
            nd.next.next = af;
        }
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (this.size === 1 && index === 0) {
        this.size = 0;
        this.head = null;
        return void 0;
    }
    if (index === 0) {
        this.head = this.head.next;
        this.size--;
    } else if (index > 0 && index < this.size) {
        this.size--;
        let nd = this.head;
        let i = 0;
        while (i < index - 1) {
            nd = nd.next;
            i++;
        }
        nd.next = nd.next.next;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const log = (op, para, ans) => {
    let ll = new MyLinkedList();
    let ret = [null];
    let allSame = true;
    for (let i = 1; i < op.length; i++) {
        if (op[i] === "addAtHead") {
            ll.addAtHead(para[i][0]);
            ret.push(null);
        } else if (op[i] === "addAtIndex") {
            ll.addAtIndex(para[i][0], para[i][1]);
            ret.push(null);
        } else if (op[i] === "addAtTail") {
            ll.addAtTail(para[i][0]);
            ret.push(null);
        } else if (op[i] === "deleteAtIndex") {
            ll.deleteAtIndex(para[i][0], para[i][1]);
            ret.push(null);
        } else if (op[i] === "get") {
            ret.push(ll.get(para[i][0]));
        }
        if (allSame && ret[i] !== ans[i]) {
            allSame = false;
        }
    }
    console.log(allSame ? "all OK" : "Error");
    // console.log(ret);
    // console.log(ans);
}

let op = ["MyLinkedList", "addAtHead", "addAtHead", "addAtHead", "addAtIndex", "deleteAtIndex", "addAtHead", "addAtTail", "get", "addAtHead", "addAtIndex", "addAtHead"];
let para = [[], [7], [2], [1], [3, 0], [2], [6], [4], [4], [4], [5, 0], [6]];
let ans = [null, null, null, null, null, null, null, null, 4, null, null, null]
log(op, para, ans);

op = ["MyLinkedList", "addAtHead", "deleteAtIndex"];
para = [[], [1], [0]];
ans = [null, null, null];
log(op, para, ans);

op = ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"];
para = [[], [1], [3], [1, 2], [1], [0], [0]];
ans = [null, null, null, null, 2, null, 2];
log(op, para, ans);

op = ["MyLinkedList", "addAtHead", "get", "addAtHead", "addAtHead", "deleteAtIndex", "addAtHead", "get", "get", "get", "addAtHead", "deleteAtIndex"];
para = [[], [4], [1], [1], [5], [3], [7], [3], [3], [3], [1], [4]];
ans = [null, null, -1, null, null, null, null, 4, 4, 4, null, null];
log(op, para, ans);