// 面试题 08.11. Coin LCCI
// Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and pennies (1 cent), write code to calculate the number of ways of representing n cents. 
// (The result may be large, so you should return it modulo 1000000007)

// Example1:

//  Input: n = 5
//  Output: 2
//  Explanation: There are two ways:
// 5=5
// 5=1+1+1+1+1
// Example2:

//  Input: n = 10
//  Output: 4
//  Explanation: There are four ways:
// 10=10
// 10=5+5
// 10=5+1+1+1+1+1
// 10=1+1+1+1+1+1+1+1+1+1
// Notes:

// You can assume:

// 0 <= n <= 1000000

/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function (n) {
    // dp[i][j] 前 i 个硬币凑出 j 元的方案数
    // dp[i][j] = dp[i-1][j] + dp[i-1][n-coin[i]];
    // dp[i][0] = 1, 不拿硬盘，也是一种方案
    // dp[0][j] = 0, 没有硬币，没有方案
    let dp = []; // coin.length + 1;
    const coin = [1, 5, 10, 25];
    const mod = 1000000007;
    for (let i = 0; i <= 4; i++) {
        let row = new Int32Array(n + 1);
        row[0] = 1;
        dp.push(row);
    }
    for (let j = 1; j <= n; j++) {
        for (let i = 0; i <= 3; i++) {
            if (coin[i - 1] <= j) {
                dp[i][j] = dp[i - 1][j] + dp[i - 1][j - coin[i - 1]];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[4][n] % mod;
};

console.log(waysToChange(3));