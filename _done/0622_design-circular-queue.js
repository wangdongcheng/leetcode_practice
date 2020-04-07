// 622. Design Circular Queue
// Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

// One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

// Your implementation should support following operations:

// MyCircularQueue(k): Constructor, set the size of the queue to be k.
// Front: Get the front item from the queue. If the queue is empty, return -1.
// Rear: Get the last item from the queue. If the queue is empty, return -1.
// enQueue(value): Insert an element into the circular queue. Return true if the operation is successful.
// deQueue(): Delete an element from the circular queue. Return true if the operation is successful.
// isEmpty(): Checks whether the circular queue is empty or not.
// isFull(): Checks whether the circular queue is full or not.


// Example:

// MyCircularQueue circularQueue = new MyCircularQueue(3); // set the size to be 3
// circularQueue.enQueue(1);  // return true
// circularQueue.enQueue(2);  // return true
// circularQueue.enQueue(3);  // return true
// circularQueue.enQueue(4);  // return false, the queue is full
// circularQueue.Rear();  // return 3
// circularQueue.isFull();  // return true
// circularQueue.deQueue();  // return true
// circularQueue.enQueue(4);  // return true
// circularQueue.Rear();  // return 4

// Note:

// All values will be in the range of [0, 1000].
// The number of operations will be in the range of [1, 1000].
// Please do not use the built-in Queue library.

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.cQueue = new Array();
    this.capacity = k
    this.head = -1;
    this.tail = -1;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (!this.isFull()) {
        if (this.tail > this.head) {
            if (this.tail < this.capacity - 1) {
                this.cQueue.push(value);
                this.tail++;
            } else {
                this.tail = 0;
                this.cQueue.unshift(value);
            }
        } else if (this.head === -1 && this.tail === -1) {
            this.cQueue.push(value);
            this.head++;
            this.tail++;
        } else {
            this.tail++;
            this.cQueue.splice(this.tail, 0, value);
        }
        return true;
    } else {
        return false;
    }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) return false;
    this.cQueue.splice(this.head, 1)
    if (this.isEmpty()) {
        this.head = -1;
        this.tail = -1;
    } else {
        if (this.head <= this.capacity - 1) {
            if (this.head === 0) {
                this.tail--;
            } else {
                this.head++;
            }
        } else {
            this.head = 0;
        }
    }
    return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty()) return -1;
    return this.cQueue[this.head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) return -1;
    return this.cQueue[this.tail];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.cQueue.length === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.cQueue.length === this.capacity;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

let q = new MyCircularQueue(3);
console.log("start:");
console.log(q.enQueue(1), true);
console.log(q.enQueue(2), true);
console.log(q.enQueue(3), true);
console.log(q.enQueue(4), false);
console.log(q.Rear(), 3);
console.log(q.isFull(), true);
console.log(q.deQueue(), true);
console.log(q.enQueue(4), true);
console.log(q.Rear(), 4);

// ["MyCircularQueue","enQueue","Rear","Rear","deQueue","enQueue","Rear","deQueue","Front","deQueue","deQueue","deQueue"]
// [[6],[6],[],[],[],[5],[],[],[],[],[],[]]

// [null,true,6,6,true,true,5,true,-1,false,false,false]

q = new MyCircularQueue(6);
console.log("start:");
console.log(q.enQueue(6), true);
console.log(q.Rear(), 6);
console.log(q.Rear(), 6);
console.log(q.deQueue(), true);
console.log(q.enQueue(5), true);
console.log(q.Rear(), 5);
console.log(q.deQueue(), true);
console.log(q.Front(), -1);
console.log(q.deQueue(), false);
console.log(q.deQueue(), false);
console.log(q.deQueue(), false);

// ["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","deQueue","deQueue","isEmpty","isEmpty","Rear","Rear","deQueue"]
// [[8],[3],[9],[5],[0],[],[],[],[],[],[],[]]

// [null,true,true,true,true,true,true,false,false,0,0,true]
q = new MyCircularQueue(8);
console.log("start:");
console.log(q.enQueue(3), true);
console.log(q.enQueue(9), true);
console.log(q.enQueue(5), true);
console.log(q.enQueue(0), true);
console.log(q.deQueue(), true);
console.log(q.deQueue(), true);
console.log(q.isEmpty(), false);
console.log(q.isEmpty(), false);
console.log(q.Rear(), 0);
console.log(q.Rear(), 0);
console.log(q.deQueue(), true);