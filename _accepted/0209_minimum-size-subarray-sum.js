// 209. Minimum Size Subarray Sum
// Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

// Example: 
// Input: s = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: the subarray [4,3] has the minimal length under the problem constraint.
// Follow up:
// If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let qty = 1;
    if (!nums.length) {
        return 0;
    } else if (nums.length === 1 && nums[0] <= s) {
        return 1;
    } else if (nums.findIndex(val => val >= s) != -1) {
        return 1;
    }
    let ans = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        let sum = nums[i];
        qty = 1;
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            qty++;
            if (sum >= s) {
                ans = ans === 0 ? qty : Math.min(ans, qty);
                break;
            }
        }
    }
    return ans;
};

console.log(minSubArrayLen(18, [2, 3, 1, 2, 4, 3, 4, 5, 6]), 4);
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), 2);
console.log(minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]), 2);
console.log(minSubArrayLen(9, [4, 3, 5]), 3);
console.log(minSubArrayLen(3, [1, 1]), 0);