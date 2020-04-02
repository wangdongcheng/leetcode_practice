// 494. Target Sum
// You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

// Find out how many ways to assign symbols to make sum of integers equal to target S.

// Example 1:
// Input: nums is [1, 1, 1, 1, 1], S is 3. 
// Output: 5
// Explanation: 

// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3

// There are 5 ways to assign symbols to make the sum of nums be target 3.
// Note:
// The length of the given array is positive and will not exceed 20.
// The sum of elements in the given array will not exceed 1000.
// Your output answer is guaranteed to be fitted in a 32-bit integer.

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
    if (nums.length === 1) {
        if (Math.abs(nums[0]) === Math.abs(S)) {
            if (S === 0) {
                return 2;
            } else {
                return 1;
            }
        } else {
            return 0;
        }
    } else {
        return findTargetSumWays(nums.slice(1), S - nums[0]) + findTargetSumWays(nums.slice(1), S + nums[0]);
    }
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3), 5)
console.log(findTargetSumWays([1, 4, 3, 2, 3, 4, 5, 4, 1, 1, 1], 22), 0);
console.log(findTargetSumWays([1, 4, 3, 2, 3, 4, 2, 4, 1, 1, 1], 22), 8);
console.log(findTargetSumWays([1, 0], 1), 2);
console.log(findTargetSumWays([1, 4, 3, 0, 3, 0, 2, 4, 1, 1, 1], 8), 128);