// 50. Pow(x, n)
// Implement pow(x, n), which calculates x raised to the power n (xn).

// Example 1:
// Input: 2.00000, 10
// Output: 1024.00000

// Example 2:
// Input: 2.10000, 3
// Output: 9.26100

// Example 3:
// Input: 2.00000, -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// Note:

// -100.0 < x < 100.0
// n is a 32-bit signed integer, within the range [−231, 231 − 1]

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow_1 = function (x, n) {
    // what a shame
    return Math.pow(x, n);
};

var myPow = function (x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -1 * n;
    }
    
    let dp = new Array(n + 1);
    dp[0] = 1;
    dp[1] = x;

    for (let i = 2; i <= n; i++) {
        if ((i & 1) === 0) {
            dp[i] = (dp[i / 2] * dp[i / 2]).toFixed(20);
        } else {
            dp[i] = (dp[(i - 1) / 2] * dp[(i - 1) / 2] * x).toFixed(20);
        }
        if (dp[i] === 0) return 0;
    }
    return dp[n];

    // const fastPow = (x, n) => {
    //     if (n === 1) return x;
    //     if (n === -1) return 1 / x;
    //     if (n === 0) return 1;

    //     if ((n & 1) === 0) {
    //         return fastPow(x, n / 2) * fastPow(x, n / 2);
    //     } else {
    //         return fastPow(x, (n - 1) / 2) * fastPow(x, (n - 1) / 2) * x;
    //     }
    // }

};

console.log(myPow(88, -5));
console.log(myPow(0.00001, 2147483647));//TLE