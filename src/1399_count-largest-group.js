// 1399. Count Largest Group
// Given an integer n. Each number from 1 to n is grouped according to the sum of its digits. 

// Return how many groups have the largest size.

// Example 1:
// Input: n = 13
// Output: 4
// Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
// [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9]. There are 4 groups with largest size.

// Example 2:
// Input: n = 2
// Output: 2
// Explanation: There are 2 groups [1], [2] of size 1.

// Example 3:
// Input: n = 15
// Output: 6

// Example 4:
// Input: n = 24
// Output: 5

// Constraints:
// 1 <= n <= 10^4

/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {

    const nToArrSum = n => {
        const str = n.toString();
        let arr = str.split(""),
            sum = 0;
        arr.forEach(val => {
            val = parseInt(val, 10);
            sum += val;
        })
        return sum;
    }
    let sumArr = new Int32Array(10000);
    for (let i = 1; i <= n; i++) {
        if (i >= 10) {
            sumArr[nToArrSum(i)]++;
        } else {
            sumArr[i]++;
        }
    }
    sumArr.sort((a, b) => b - a);
    let qty = 0;
    let i = 0;
    while (sumArr[i] === sumArr[0]) {
        qty++
        i++;
    }
    return qty;
};

console.log(countLargestGroup(13), 4);
console.log(countLargestGroup(15), 6);
console.log(countLargestGroup(24), 5);
console.log(countLargestGroup(2), 2);