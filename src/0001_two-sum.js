// 1. Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    // 我的提交，180 ms
    if (false) {
        let idx = 0;

        for (let i = 0; i < nums.length; i++) {
            idx = nums.indexOf(target - nums[i]);

            if (idx != -1 && i != idx) {
                return [i, idx];
            }
        }
    }

    // 执行用时最少(40 ms)的范例，精妙！

    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let dif = target - nums[i]
        if (map.has(dif)) {
            return [map.get(dif), i]
        }
        map.set(nums[i], i);
    }
};