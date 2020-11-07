// 941. Valid Mountain Array
// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < A[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false
// Example 3:

// Input: arr = [0,3,2,1]
// Output: true

// Constraints:
// 1 <= arr.length <= 10^4
// 0 <= arr[i] <= 10^4

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    const len = arr.length;
    if (!len || len <= 2) return false;
    let delta = [],
        sign = 1;
    for (let i = 0; i < len - 1; ++i) {
        delta.push(arr[i + 1] - arr[i]);
    }
    if (delta[0] <= 0) return false;
    for (let i = 0; i < delta.length; ++i) {
        if (sign * delta[i] === 0) return false;
        if (sign * delta[i] < 0) {
            if (sign === 1) {
                sign = -1;
            } else {
                return false;
            }
        }
    }
    return sign === -1;
};

console.log(validMountainArray([2, 1]), false);
console.log(validMountainArray([3, 5, 5]), false);
console.log(validMountainArray([0, 3, 2, 1]), true);
console.log(validMountainArray([-3, -1.5, -1, 1, 4, 5, 7, 8]), false);
console.log(validMountainArray([-3, -1.5, -1, 1, 4, 5, 7, 6]), true);
console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), false);
console.log(validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), false);