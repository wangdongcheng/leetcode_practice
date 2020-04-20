// 1414. Find the Minimum Number of Fibonacci Numbers Whose Sum Is K
// Given the number k, return the minimum number of Fibonacci numbers whose sum is equal to k, whether a Fibonacci number could be used multiple times.

// The Fibonacci numbers are defined as:

// F1 = 1
// F2 = 1
// Fn = Fn-1 + Fn-2 , for n > 2.
// It is guaranteed that for the given constraints we can always find such fibonacci numbers that sum k.

// Example 1:
// Input: k = 7
// Output: 2 
// Explanation: The Fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, ... 
// For k = 7 we can use 2 + 5 = 7.

// Example 2:
// Input: k = 10
// Output: 2 
// Explanation: For k = 10 we can use 2 + 8 = 10.

// Example 3:
// Input: k = 19
// Output: 3 
// Explanation: For k = 19 we can use 1 + 5 + 13 = 19.
 
// Constraints:
// 1 <= k <= 10^9

// tags: need to understand more

/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers_TLE = function (k) {
    let fib = [];
    fib[0] = 1;
    fib[1] = 1;
    let a = 2;
    while (true) {
        fib.push(fib[a - 1] + fib[a - 2]);
        if (fib[a] >= k) {
            break;
        }
        a++
    }
    fib.shift();
    let dp = new Int32Array(k + 1);
    dp.fill(k + 1);
    dp[0] = 0;
    for (let i = 1; i <= k; i++) {
        for (let j = 0; j < fib.length; j++) {
            if (fib[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - fib[j]] + 1);
            }
        }
    }
    return dp[k];
};

const findMinFibonacciNumbers = k => {
    let fib = [];
    fib[0] = 1;
    fib[1] = 1;
    let i = 2;
    while (true) {
        fib.push(fib[i - 1] + fib[i - 2]);
        if (fib[i] >= k) {
            break;
        }
        i++
    }
    let qty = 1;
    for (let i = fib.length - 1; i >= 0; i--) {
        if (fib[i] === k) {
            return qty;
        } else if (k > fib[i]) {
            k -= fib[i];
            qty++;
        }
    }
}
console.log(findMinFibonacciNumbers(15), 2);
console.log(findMinFibonacciNumbers(10), 2);
console.log(findMinFibonacciNumbers(19), 3);
console.log(findMinFibonacciNumbers(7710966), 10);
console.log(findMinFibonacciNumbers(4861828), 10);