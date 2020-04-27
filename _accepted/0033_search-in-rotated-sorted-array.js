// 33. Search in Rotated Sorted Array
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// tags: binary search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // O(n), 72 ms, 33.7 MB
    // return nums.indexOf(target);

    // binary search, O(log n), 60 ms, 33.7 MB
    let start = 0;
    let end = nums.length - 1;
    let mid = 0;

    while (start <= end) {
        mid = start + Math.floor((end - start) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (nums[mid] >= nums[start] && nums[mid] >= nums[end]) {
            if (target > nums[mid] || target <= nums[end]) {
                start = mid + 1;
            } else if (target < nums[mid] && target >= nums[start]) {
                end = mid - 1;
            } else if (target < nums[start] && target > nums[end]) {
                return -1;
            }
        } else if (nums[mid] < nums[start] && nums[mid] <= nums[end]) {
            if (target < nums[mid] || target >= nums[start]) {
                end = mid - 1;
            } else if (target > nums[mid]) {
                start = mid + 1;
            }
        } else if (nums[mid] < nums[end] && nums[mid] >= nums[start]) {
            if (target > nums[mid]) {
                start = mid + 1;
            } else if (target < nums[mid]) {
                end = mid - 1;
            }
        }
    }
    return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
console.log(search([4, 5, 6, 7, 0, 1, 2], 4), 0);
console.log(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
console.log(search([3324, 5654, 7789, 12354, 3, 4, 5, 6, 7, 8, 43, 55, 67, 899, 1245], 7), 8);
console.log(search([1], 0), -1);
console.log(search([2, 1], 1), 1);
console.log(search([2, 1], 3), -1);
console.log(search([1, 3], 3), 1);
console.log(search([1, 3], 1), 0);