// 509. Fibonacci Number
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.
// Given N, calculate F(N).

// Example 1:
// Input: 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// Input: 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    let dp = new Array(N);

    dp[0] = 0;
    dp[1] = 1;

    if (N <= 1) return dp[N];

    for (let i = 2; i <= N; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[N];
};

console.log(fib(8), 21);
console.log(fib(4), 3);
console.log(fib(3), 2);
console.log(fib(1), 1);
console.log(fib(30), 832040);