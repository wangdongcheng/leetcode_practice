// 739. Daily Temperatures
// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

// Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let ret = [];
    T.forEach((val, idx, arr) => {
        let n = T.findIndex((t, i) => {
            return t > val && i > idx;
        }) - idx;
        ret.push(n > 0 ? n : 0);
    })
    return ret;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
console.log(dailyTemperatures([37, 52, 38, 77, 32, 61, 56, 79, 59, 68, 69, 33, 96, 35, 44, 71, 55, 98, 92, 34, 92, 82, 72, 90, 56, 67, 68, 46, 94, 52, 38, 80, 43]), [1, 2, 1, 4, 1, 2, 1, 5, 1, 1, 2, 1, 5, 1, 1, 2, 1, 0, 10, 1, 8, 2, 1, 5, 1, 1, 2, 1, 0, 2, 1, 0, 0]);