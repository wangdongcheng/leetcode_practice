// 283. Move Zeroes
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (!nums.length || nums.indexOf(0) === -1) {
        return nums;
    }
    let i = 0;
    let j = 0;
    while (i < nums.length) {
        if (nums[i] != 0) {
            nums[j] = nums[i]
            j++;
        }
        i++;
    }
    while (j < nums.length) {
        nums[j] = 0;
        j++;
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]);