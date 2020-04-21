// 1248. Count Number of Nice Subarrays
// Given an array of integers nums and an integer k. A subarray is called nice if there are k odd numbers on it.

// Return the number of nice sub-arrays.

// Example 1:

// Input: nums = [1,1,2,1,1], k = 3
// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
// Example 2:

// Input: nums = [2,4,6], k = 1
// Output: 0
// Explanation: There is no odd numbers in the array.
// Example 3:

// Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
// Output: 16

// Constraints:
// 1 <= nums.length <= 50000
// 1 <= nums[i] <= 10^5
// 1 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    let oddsIdx = [];
    nums.forEach((val, idx) => {
        if (val % 2 != 0) {
            oddsIdx.push(idx);
        }
    })
    if (oddsIdx.length < k) {
        return 0;
    } else if (oddsIdx.length === k) {
        return (oddsIdx[0] + 1) * (nums.length - oddsIdx[oddsIdx.length - 1]);
    }
    let ret = 0;
    for (let i = 0; i <= oddsIdx.length - k; i++) {
        if (i === 0) {
            ret += (oddsIdx[i] + 1) * (oddsIdx[i + k] - oddsIdx[i + k - 1]);
        } else if (i < oddsIdx.length - k) {
            ret += (oddsIdx[i] - oddsIdx[i - 1]) * (oddsIdx[i + k] - oddsIdx[i + k - 1]);
        } else if (i === oddsIdx.length - k) {
            ret += (oddsIdx[i] - oddsIdx[i - 1]) * (nums.length - oddsIdx[i + k - 1]);
        }
    }
    return ret;
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3), 2);
console.log(numberOfSubarrays([4, 2, 1, 1, 2, 1, 1, 6, 8, 12], 4), 12);
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2), 16);
console.log(numberOfSubarrays([45627, 50891, 94884, 11286, 35337, 46414, 62029, 20247, 72789, 89158, 54203, 79628, 25920, 16832, 47469, 80909], 1), 28);