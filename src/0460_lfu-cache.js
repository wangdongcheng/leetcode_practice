// 460. LFU Cache
// Design and implement a data structure for Least Frequently Used (LFU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least frequently used item before inserting a new item. For the purpose of this problem, when there is a tie (i.e., two or more keys that have the same frequency), the least recently used key would be evicted.

// Note that the number of times an item is used is the number of calls to the get and put functions for that item since it was inserted. This number is set to zero when the item is removed.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:
// LFUCache cache = new LFUCache( 2 /* capacity */ );
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.get(3);       // returns 3.
// cache.put(4, 4);    // evicts key 1.
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
    this.capacity = capacity;
    this.m = new Map();
    this.frqM = new Map(); // frequency, [key1, key2..]
};

const addFrequency = (m, key, isCreate) => {
    if (isCreate) {
        if (!m.has(1)) {
            m.set(1, [key]);
        } else {
            let kArr = m.get(1);
            kArr.push(key);
            m.set(1, kArr);
        }
        return void 0;
    }
    let newFrq = 0;
    for (let [frq, kArr] of m) {
        if (kArr.includes(key)) {
            newFrq = frq + 1;
            kArr.splice(kArr.indexOf(key), 1);
            if (!kArr.length) {
                m.delete(frq);
                break;
            }
        }
    }
    if (m.has(newFrq)) {
        let kArr = m.get(newFrq);
        kArr.push(key);
        m.set(newFrq, kArr)
    } else {
        m.set(newFrq, [key]);
    }
}
/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
    if (this.capacity === 0) return -1;
    if (this.m.has(key)) {
        addFrequency(this.frqM, key, false);
        return this.m.get(key);
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
    if (this.capacity === 0) return void 0;
    if (this.m.size < this.capacity || this.m.has(key)) {
        if (!this.m.has(key)) {
            addFrequency(this.frqM, key, true);
        } else {
            addFrequency(this.frqM, key, false);
        }
    } else {
        let frqArr = Array.from(this.frqM.keys());
        frqArr.sort((a, b) => a - b);
        let lowFrqKeyArr = this.frqM.get(frqArr[0]);
        toDel = lowFrqKeyArr.shift();
        if (!lowFrqKeyArr.length) {
            this.frqM.delete(frqArr[0]);
        } else {
            this.frqM.set(frqArr[0], lowFrqKeyArr)
        }
        this.m.delete(toDel);
        addFrequency(this.frqM, key, true);
    }
    this.m.set(key, value);
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const testLog = (opArr, paraArr, expect) => {
    let ret = [],
        lfu = new LFUCache(0),
        diff = [];
    opArr.forEach((op, idx) => {
        if (op === "LFUCache") {
            lfu = new LFUCache(paraArr[idx][0]);
            ret.push([null, expect[idx]]);
        } else if (op === "put") {
            lfu.put(paraArr[idx][0], paraArr[idx][1]);
            ret.push([`put ${paraArr[idx][0]}, ${paraArr[idx][1]}`, null, expect[idx]]);
        } else if (op === "get") {
            let val = lfu.get(paraArr[idx][0]);
            if (val != expect[idx]) diff.push([`Index = ${idx}`, `get ${paraArr[idx][0]}`, val, expect[idx]]);
            ret.push([`get ${paraArr[idx][0]}`, val, expect[idx]]);
        }
    })
    console.log(diff);
    console.log(ret);
}

let op = ["LFUCache", "put", "put", "put", "put", "put", "get", "put", "get", "get", "put", "get", "put", "put", "put", "get", "put", "get", "get", "get", "get", "put", "put", "get", "get", "get", "put", "put", "get", "put", "get", "put", "get", "get", "get", "put", "put", "put", "get", "put", "get", "get", "put", "put", "get", "put", "put", "put", "put", "get", "put", "put", "get", "put", "put", "get", "put", "put", "put", "put", "put", "get", "put", "put", "get", "put", "get", "get", "get", "put", "get", "get", "put", "put", "put", "put", "get", "put", "put", "put", "put", "get", "get", "get", "put", "put", "put", "get", "put", "put", "put", "get", "put", "put", "put", "get", "get", "get", "put", "put", "put", "put", "get", "put", "put", "put", "put", "put", "put", "put"];
let para = [[10], [10, 13], [3, 17], [6, 11], [10, 5], [9, 10], [13], [2, 19], [2], [3], [5, 25], [8], [9, 22], [5, 5], [1, 30], [11], [9, 12], [7], [5], [8], [9], [4, 30], [9, 3], [9], [10], [10], [6, 14], [3, 1], [3], [10, 11], [8], [2, 14], [1], [5], [4], [11, 4], [12, 24], [5, 18], [13], [7, 23], [8], [12], [3, 27], [2, 12], [5], [2, 9], [13, 4], [8, 18], [1, 7], [6], [9, 29], [8, 21], [5], [6, 30], [1, 12], [10], [4, 15], [7, 22], [11, 26], [8, 17], [9, 29], [5], [3, 4], [11, 30], [12], [4, 29], [3], [9], [6], [3, 4], [1], [10], [3, 29], [10, 28], [1, 20], [11, 13], [3], [3, 12], [3, 8], [10, 9], [3, 26], [8], [7], [5], [13, 17], [2, 27], [11, 15], [12], [9, 19], [2, 15], [3, 16], [1], [12, 17], [9, 1], [6, 19], [4], [5], [5], [8, 1], [11, 7], [5, 2], [9, 28], [1], [2, 2], [7, 4], [4, 22], [7, 24], [9, 26], [13, 28], [11, 26]];
let expect = [null, null, null, null, null, null, -1, null, 19, 17, null, -1, null, null, null, -1, null, -1, 5, -1, 12, null, null, 3, 5, 5, null, null, 1, null, -1, null, 30, 5, 30, null, null, null, -1, null, -1, 24, null, null, 18, null, null, null, null, 14, null, null, 18, null, null, 11, null, null, null, null, null, 18, null, null, -1, null, 4, 29, 30, null, 12, 11, null, null, null, null, 29, null, null, null, null, 17, -1, 18, null, null, null, -1, null, null, null, 20, null, null, null, 29, 18, 18, null, null, null, null, 20, null, null, null, null, null, null, null];
testLog(op, para, expect);


let lfu = new LFUCache(10);
lfu.put(10, 13);
lfu.put(3, 17);
lfu.put(6, 11);
lfu.put(10, 5);
lfu.put(9, 10);
console.log(lfu.get(13), -1);
lfu.put(2, 19);
console.log(lfu.get(2), 19);
console.log(lfu.get(3), 17);
lfu.put(5, 25);
console.log(lfu.get(8), -1);
lfu.put(9, 22);
lfu.put(5, 5);
lfu.put(1, 30);
console.log(lfu.get(11), -1);
lfu.put(9, 12);
console.log(lfu.get(7), -1);
console.log(lfu.get(5), 5);
console.log(lfu.get(8), -1);
console.log(lfu.get(9), 12);
lfu.put(4, 30);
lfu.put(9, 3);
console.log(lfu.get(9), 3);
console.log(lfu.get(10), 5);
console.log(lfu.get(10), 5);



// ["LFUCache","put","put","put","put","get","get"]
// [[2],[2,1],[1,1],[2,3],[4,1],[1],[2]]
// [null,null,null,null,null,-1,3]
lfu = new LFUCache(2);
lfu.put(2, 1);
lfu.put(1, 1);
lfu.put(2, 3);
lfu.put(4, 1);
console.log(lfu.get(1), -1);
console.log(lfu.get(2), 3);
console.log("END");

// ["LFUCache","put","put","get","put","get","get","put","get","get","get"]
// [[2],[1,1],[1,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]
// [null,null,null,2,null,-1,3,null,2,-1,4]

// ["LFUCache","put","put","get","put","get","get","put","get","get","get","get"]
// [[3],[1,1],[5,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4],[5]]
// [null,null,null,1,null,-1,3,null,1,3,4,-1]

lfu = new LFUCache(3);
lfu.put(1, 1);
lfu.put(5, 2);
console.log(lfu.get(1), 1);
lfu.put(3, 3);
console.log(lfu.get(2), -1);
console.log(lfu.get(3), 3);
lfu.put(4, 4);
console.log(lfu.get(1), 1);
console.log(lfu.get(3), 3);
console.log(lfu.get(4), 4);
console.log(lfu.get(5), -1);
console.log("END");

// ["LFUCache","put","put","get","put","get","get","put","get","get","get"]
// [[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]
// [null,null,null,1,null,-1,3,null,-1,3,4]

lfu = new LFUCache(2);
lfu.put(1, 1);
lfu.put(2, 2);
console.log(lfu.get(1), 1);
lfu.put(3, 3);
console.log(lfu.get(2), -1);
console.log(lfu.get(3), 3);
lfu.put(4, 4);
console.log(lfu.get(1), -1);
console.log(lfu.get(3), 3);
console.log(lfu.get(4), 4);
console.log("END");

// ["LFUCache", "put", "get"]
// [[0], [0, 0], [0]]

// ["LFUCache","put","get","put","get","get"]
// [[1],[2,1],[2],[3,2],[2],[3]]
// [null,null,1,null,-1,2]
lfu = new LFUCache(1);
lfu.put(2, 1);
console.log(lfu.get(2), 1);
lfu.put(3, 2);
console.log(lfu.get(2), -1);
console.log(lfu.get(3), 2);
console.log("END");