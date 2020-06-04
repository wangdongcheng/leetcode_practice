// 238. Product of Array Except Self
// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    if (!nums.length) return [];
    if (nums.length === 1) return [1];

    const len = nums.length;
    let l = new Array(len),
        r = new Array(len),
        ret = [];

    l[0] = 1;
    for (let i = 1; i < len; ++i) {
        l[i] = nums[i - 1] * l[i - 1];
    }
    r[len - 1] = 1;
    for (let i = len - 2; i >= 0; --i) {
        r[i] = nums[i + 1] * r[i + 1];
    }
    l.forEach((val, idx, arr) => {
        ret.push(val * r[idx]);
    });
    return ret;
};

console.log(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
console.log(productExceptSelf([33, 23, 7, 9, 76, 83, 3]).join("|") === [27420876, 39342996, 129269844, 100543212, 11906433, 10902276, 301629636].join("|"));