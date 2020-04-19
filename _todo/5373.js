// 5373. 和为 K 的最少斐波那契数字数目

/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
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

console.log(findMinFibonacciNumbers(15), 2);
console.log(findMinFibonacciNumbers(10), 2);
console.log(findMinFibonacciNumbers(19), 3);
console.log(findMinFibonacciNumbers(7710966), 10);
console.log(findMinFibonacciNumbers(4861828), 10);