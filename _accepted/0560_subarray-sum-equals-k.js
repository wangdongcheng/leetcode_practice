// 560. Subarray Sum Equals K
// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:

// Input:nums = [1,1,1], k = 2
// Output: 2

// Constraints:

// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySumForceSearch = function (nums, k) { // 1084 ms, 37.5 MB
    let sum = [];
    let s = 0;
    let ret = 0;
    nums.forEach(n => {
        s += n;
        sum.push(s);
    })
    for (let i = 0; i < sum.length; i++) {
        if (sum[i] === k) {
            ret++;
        }
        for (let j = i + 1; j < sum.length; j++) {
            if (sum[j] - sum[i] === k) {
                ret++;
            }
        }
    }
    return ret;
};

const subarraySum = (nums, k) => { // 88 ms, 40.5 MB
    if (!nums.length) return 0;
    let m = new Map();
    m.set(0, 1);    // the scenario of "sum === k"
    let ret = 0;
    let sum = 0;
    nums.forEach(n => {
        sum += n;
        if (m.has(sum - k)) {
            ret += m.get(sum - k);
        }
        if (m.has(sum)) {
            m.set(sum, m.get(sum) + 1);
        } else {
            m.set(sum, 1);
        }
    })
    return ret;
}

console.log(subarraySum([1, 1, 1], 2), 2);
console.log(subarraySum([1, 2, 3], 3), 2);
console.log(subarraySum([1, 2, 1, 2, 1], 3), 4);
console.log(subarraySum([1], 0), 0);
console.log(subarraySum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0), 55);