// 232. Implement Queue using Stacks
// Implement the following operations of a queue using stacks.

// push(x) -- Push element x to the back of queue.
// pop() -- Removes the element from in front of queue.
// peek() -- Get the front element.
// empty() -- Return whether the queue is empty.
// Example:

// MyQueue queue = new MyQueue();

// queue.push(1);
// queue.push(2);  
// queue.peek();  // returns 1
// queue.pop();   // returns 1
// queue.empty(); // returns false

// Notes:
// You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
// You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.st = [];
    this.reSt = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.st.push(x);
    let stCopy = this.st.slice(0);
    this.reSt = [];
    while (stCopy.length) {
        this.reSt.push(stCopy.pop());
    }

};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    let tmp = this.reSt.pop(),
        stCopy = this.reSt.slice(0);
    this.st = [];
    while (stCopy.length) {
        this.st.push(stCopy.pop());
    }
    return tmp;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    let tmp = this.reSt.pop();
    this.reSt.push(tmp);
    return tmp;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.st.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// ["MyQueue","push","pop","empty"]
// [[],[1],[],[]]
// [null,null,1,true]

// ["MyQueue","push","push","peek","pop","empty"]
// [[],[1],[2],[],[],[]]
// [null,null,null,1,1,false]