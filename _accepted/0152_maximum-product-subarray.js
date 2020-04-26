// 152. Maximum Product Subarray
// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:
// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:
// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// tags: TLE

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductForceSearch = function (nums) { // maybe works but TLE
    if (nums.length === 1) {
        return nums[0];
    }
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let it = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            max = Math.max(max, it, it *= nums[j], nums[j]);
        }
    }
    return max;
};

var maxProduct = function (nums) {

}

console.log(maxProductForceSearch([2, 3, -2, 4]), 6);
console.log(maxProductForceSearch([-2, 0, -1]), 0);
console.log(maxProductForceSearch([-4, -3]), 12);
console.log(maxProductForceSearch([0, 2]), 2);
const long = require("../json_test_case/0152_maximum-product-subarray.json");
console.log(maxProductForceSearch(long), 1492992000);