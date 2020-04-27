// 704. Binary Search
// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Note:
// You may assume that all elements in nums are unique.
// n will be in the range [1, 10000].
// The value of each element in nums will be in the range [-9999, 9999].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid = 0;

    while (start <= end) {
        mid = start + Math.floor((end - start) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            start = mid + 1;
        } else if (target < nums[mid]) {
            end = mid - 1;
        }
    }
    return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9), 4);
console.log(search([-1, 0, 3, 5, 9, 12], 2), -1);
console.log(search([-99, -87, -6, 0, 1, 3, 4, 5, 6, 7, 88], 0), 3);
console.log(search([5], 5), 0);
console.log(search([5], 3), -1);