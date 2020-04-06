// 225. Implement Stack using Queues

// Implement the following operations of a stack using queues.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// empty() -- Return whether the stack is empty.
// Example:

// MyStack stack = new MyStack();

// stack.push(1);
// stack.push(2);  
// stack.top();   // returns 2
// stack.pop();   // returns 2
// stack.empty(); // returns false

// Notes:
// You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
// Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
// You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).

/**
 * Initialize your data structure here.
 */
var MyStack = function () {
    this.que = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.que.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let i = 0,
        tmp = [],
        len = this.que.length;
    while (i <= len - 2) {
        tmp.push(this.que.shift());
        i++;
    }
    let top = this.que.shift();
    this.que = tmp.slice(0);
    return top;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    let i = 0,
        tmp = [],
        len = this.que.length;
    while (i <= len - 2) {
        tmp.push(this.que.shift());
        i++;
    }
    let top = this.que.shift();
    this.que = tmp.slice(0);
    this.que.push(top);
    return top;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.que.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// ["MyStack","push","push","top","pop","empty"]
// [[],[1],[2],[],[],[]]
// [null,null,null,2,2,false]

// ["MyStack","push","push","top","pop","pop","empty"]
// [[],[1],[2],[],[],[],[]]
// [null,null,null,2,2,1,true]

let s = new MyStack();
s.push(1);
s.push(2);
console.log(s.top());
console.log(s.pop());
console.log(s.pop());
console.log(s.empty());

// ["MyStack","push","push","push","top"]
// [[],[1],[2],[3],[]]
// [null,null,null,null,3]

s = new MyStack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.top());