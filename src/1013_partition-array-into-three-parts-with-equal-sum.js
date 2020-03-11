// 1013. Partition Array Into Three Parts With Equal Sum

// Given an array A of integers, return true if and only if we can partition the array into three non-empty parts with equal sums.

// Formally, we can partition the array if we can find indexes i+1 < j with (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])

// Example 1:

// Input: A = [0,2,1,-6,6,-7,9,1,2,0,1]
// Output: true
// Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
// Example 2:

// Input: A = [0,2,1,-6,6,7,9,-1,2,0,1]
// Output: false
// Example 3:

// Input: A = [3,3,6,5,-2,2,5,1,-9,4]
// Output: true
// Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 
// Constraints:

// 3 <= A.length <= 50000
// -10^4 <= A[i] <= 10^4

/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
    if (A.length < 3) {
        return false;
    }
    let sum = A.reduce(function (prev, curr, idx, arr) {
        return prev + curr;
    });
    if (sum % 3 != 0) {
        return false;
    }
    let subSum = sum / 3,
        target = 0,
        count = [];

    for (let i = 0; i < A.length; i++) {
        target += A[i];
        if (target === subSum) {
            count.push(1);
            if (subSum != 0) {
                target = 0;
            }
        }
    }
    // console.log(count,sum, subSum);
    if (count.length === 3 || (count.length >= 3 && subSum === 0)) {
        return true;
    }
    return false;

};

console.log(canThreePartsEqualSum([10, -10, 10, -10, 10, -10, 10, -10]), true);
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]), true);
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]), false);
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]), true);