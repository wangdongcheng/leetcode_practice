// 137. Single Number II
// Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,3,2]
// Output: 3
// Example 2:

// Input: [0,1,0,1,0,1,99]
// Output: 99

// tags: bitwise

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber_sort = function (nums) { // AC, 96 ms, 36.3 MB
    nums.sort((a, b) => a - b);
    if (nums[0] !== nums[1]) return nums[0];
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i - 1] !== nums[i] && nums[i + 1] !== nums[i]) {
            return nums[i];
        }
    }
    return nums.pop();
};

var singleNumber = function (nums) {

};

console.log(singleNumber([3, 8, 3, 8, 3, 8, 99]), 99);
console.log(singleNumber([1, 0, 1, 0, 336, 0, 1]), 336);
console.log(singleNumber([-2, -2, 1, 1, -3, 1, -3, -3, -4, -2]), -4);
console.log(singleNumber([-1, -1, 2, 2, 6, 6, 4]), 4);