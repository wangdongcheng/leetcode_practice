// 146. LRU Cache
// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

// tags: The Map object holds key-value pairs and remembers the original insertion order of the keys 
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Description)

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.m = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.m.has(key)) {
        const val = this.m.get(key);
        this.m.delete(key);
        this.m.set(key, val);
        return val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {

    if (this.m.has(key)) {
        this.m.delete(key); // delete and then re-insert, to update the order of keys

    } else {
        if (this.m.size === this.capacity) {
            this.m.delete(this.m.keys().next().value);
        }
    }
    this.m.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */