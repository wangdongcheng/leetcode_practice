// 53. Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 0) {
        return 0;
    } else if (nums.length === 1) {
        return nums[0];
    } else if (nums.length === 2) {
        return Math.max(nums[0] + nums[1], nums[0], nums[1]);
    }

    let sum = nums[0],
        it = 0;

    for (let i = 0; i < nums.length; i++) {
        it = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            sum = Math.max(it, sum, it += nums[j], nums[j]);
        }
    }
    return sum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 'expect:', 6);
console.log(maxSubArray([1]), 'expect:', 1);
console.log(maxSubArray([-2, 1]), 'expect:', 1);
console.log(maxSubArray([1, 2]), 'expect:', 3);
debugger;
console.log(maxSubArray([-2, -3, -1]), 'expect:', -1);