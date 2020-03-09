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

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let descSortedCoins = coins.slice(0);
    descSortedCoins.sort(function (a, b) { return b - a });
    if (amount % descSortedCoins[0] === 0) {
        return amount / descSortedCoins[0];
    }
    if (descSortedCoins[descSortedCoins.length - 1] > amount) {
        return -1;
    }
    for (let i = 0; i < coins.length; i++) {
        if (amount === coins[i]) {
            return 1;
        }
    }

    let i = 0,
        resultStack = new Array(),
        len = -1;

    loop: {
        while (true) {
            while (i <= descSortedCoins.length - 1) {
                amount -= descSortedCoins[i];

                if (amount >= 0) {
                    resultStack.push(descSortedCoins[i]);
                    if (amount === 0) {
                        len = resultStack.length;
                        break loop;
                    }
                } else if (amount < 0) {
                    amount += descSortedCoins[i];
                    i++;
                }
            }
            let last = resultStack.pop();
            amount += last;
            i = descSortedCoins.indexOf(last) + 1;
            if (resultStack.length === 0) {
                break;
            }
        }
    }
   return len;

};

// console.log(coinChange([1, 2, 5], 11) - 3);
// console.log(coinChange([2, 3, 4, 6], 13) - 3);
// console.log(coinChange([2, 3, 6], 13) - 4);
// console.log(coinChange([1, 3, 6], 13) - 3);
// console.log(coinChange([6, 4], 11) + 1);
// console.log(coinChange([5, 4], 11) + 1);
// console.log(coinChange([2, 6, 4], 11) + 1);
// console.log(coinChange([1, 5, 8, 9, 2, 6, 3], 22) - 4);
// console.log(coinChange([186, 419, 83, 408], 6249) - 20);
console.log(coinChange([186, 419, 83, 408], 2478));
// console.log(coinChange([186, 419, 83, 408], 5830));
// console.log(coinChange([186, 419, 83, 408], 6166));
// console.log(coinChange([186, 419, 83, 408], 5841));
