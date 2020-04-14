// 189. Rotate Array
// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: [-1,-100,3,99] and k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
// Note:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (nums.length <= 1 || k === 0) {
        return nums;
    }
    const len = nums.length;
    let i = 1;
    while (i <= k) {
        nums.unshift(nums.pop());
        i++;
    }
    return nums;
};

console.log(rotate([9, 7], 0), [9, 7]);
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3), [5, 6, 7, 1, 2, 3, 4]);
console.log(rotate([5, 6, 7, 8, 5, 4, 3, 32, 4, 5, 4, 33, 21, 1, 4, 68, 0, 3], 11), [32, 4, 5, 4, 33, 21, 1, 4, 68, 0, 3, 5, 6, 7, 8, 5, 4, 3]);