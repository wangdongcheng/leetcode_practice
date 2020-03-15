// 322. Coin Change
// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Note:
// You may assume that you have an infinite number of each kind of coin.

// 不能用贪心算法，([1,5,11],15)应返回3(5+5+5)，贪心算法会返回5(11+1+1+1+1)。要用动态规划

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (amount === 0) {
        return 0;
    }

    let prevMap = new Map();

    const dp = (coins, amount) => {

        if (coins.indexOf(amount) != -1) {
            prevMap.set(amount, 1);
            return 1;
        }

        let minCoin = Math.min(...coins);
        if (minCoin > amount) {
            return -1;
        }
        let prevDp = Number.MAX_SAFE_INTEGER,
            prevMin = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < coins.length; i++) {
            if (typeof (prevMap.get(amount - coins[i])) === "number") {
                prevDp = prevMap.get(amount - coins[i])
            } else {
                prevDp = dp(coins, amount - coins[i]);
            }
            if (prevDp != -1) {
                prevMin = Math.min(prevMin, prevDp);
            }
        }
        if (prevMin === Number.MAX_SAFE_INTEGER) {
            prevMap.set(amount, -1); // i don't understand why it'll low the performance if comment this line, it's weird.
            return -1;
        } else {
            prevMap.set(amount, prevMin + 1);
            return prevMin + 1;
        }
    }
    return dp(coins, amount);
};

console.log(coinChange([2, 3, 5], 6), 2);
console.log(coinChange([2, 3, 4, 6], 13), 3);
console.log(coinChange([2, 3, 6], 13), 4);
console.log(coinChange([1, 3, 6], 13), 3);
console.log(coinChange([6, 4], 11), -1);
console.log(coinChange([5, 4], 11), -1);
console.log(coinChange([2, 6, 4], 11), -1);
console.log(coinChange([1, 5, 8, 9, 2, 6, 3], 22), 3);
console.log(coinChange([1, 5, 11], 0), 0);
console.log(coinChange([1, 5, 11], 15), 3);
console.log(coinChange([186, 419, 83, 408], 6249), 20);
console.log(coinChange([186, 419, 83, 408], 7076), 18);
// let m = new Map();
// m.set(2,22);
// m.set(3.33);

// console.log(m.get(2));
// console.log(m.get(2));