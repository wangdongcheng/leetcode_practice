// 1014. Best Sightseeing Pair
// Given an array A of positive integers, A[i] represents the value of the i-th sightseeing spot, and two sightseeing spots i and j have distance j - i between them.

// The score of a pair (i < j) of sightseeing spots is (A[i] + A[j] + i - j) : the sum of the values of the sightseeing spots, minus the distance between them.

// Return the maximum score of a pair of sightseeing spots.

// Example 1:

// Input: [8,1,5,2,6]
// Output: 11
// Explanation: i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11


// Note:

// 2 <= A.length <= 50000
// 1 <= A[i] <= 1000

/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPairTLE = function (A) { // TLE
    let ret = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < A.length; ++i) {
        for (let j = i + 1; j < A.length; ++j) {
            ret = Math.max(ret, (A[i] + A[j] + i - j));
        }
    }
    return ret;
};

/**
 * @param {number[]} A
 * @return {number}
 */
const maxScoreSightseeingPair = A => { // A[i]+i + (A[j] - j)
    let ret = Number.MIN_SAFE_INTEGER;
    let mx = A[0] + 0;
    for (let i = 1; i < A.length; ++i) {
        ret = Math.max(ret, mx + A[i] - i);
        mx = Math.max(mx, A[i] + i);
    }
    return ret;
};


console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]), 11);
const long = require("../json_test_case/1014_best-sightseeing-pair.json");
console.log(maxScoreSightseeingPair(long[0]), 1);
console.log(maxScoreSightseeingPair(long[1]), 1996);