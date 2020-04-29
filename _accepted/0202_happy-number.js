// 202. Happy Number
// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, 
// and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 
// Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let s = new Set();
    let sqr = n;
    let arr = [];
    while (sqr !== 1) {
        arr = sqr.toString(10).split("");
        sqr = 0;
        arr.forEach((val, idx, ar) => {
            sqr += parseInt(val, 10) ** 2;
        })
        if (s.has(sqr)) {
            return false;
        } else {
            s.add(sqr);
        }
    }
    return true;
};


console.log(isHappy(19), true);
console.log(isHappy(4), false);