// 279. Perfect Squares
// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

// Example 1:
// Input: n = 12
// Output: 3 
// Explanation: 12 = 4 + 4 + 4.

// Example 2:
// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.


/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let sqr = [],
        dpMap = new Map();

    const isSqr = num => {
        if (sqr.includes(num)) return true;
        for (let i = 1; i <= num / i; i++) {
            let s = i * i;
            if (!sqr.includes(s)) sqr.push(s);
            if (s === num) {
                return true;
            }
        }
        return false;
    }

    const dp = n => {
        if (isSqr(n)) return 1;
        let prev = Number.MAX_SAFE_INTEGER;
        let idx = sqr.findIndex(val => { return val > n }) != -1 ? sqr.findIndex(val => { return val > n }) - 1 : sqr.length - 1
        for (let i = idx; i >= 0; i--) {
            prev = Math.min(prev, dpMap.has(n - sqr[i]) ? dpMap.get(n - sqr[i]) : dp(n - sqr[i]));
        }

        if (!dpMap.has(n)) dpMap.set(n, prev + 1);
        return prev + 1;
    }

    return dp(n);
};

console.log(numSquares(25), 1);
console.log(numSquares(12), 3);
console.log(numSquares(13), 2);
console.log(numSquares(895), 4);
console.log(numSquares(12455), 4);
console.log(numSquares(124556), 3);

// console.log([1, 2, 3, 4, 5, 6].findIndex(val => { return val > 4 }));