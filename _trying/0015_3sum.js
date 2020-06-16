// 15. 3Sum
// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.

const { createReadStream } = require("fs");

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let arr = nums.sort((a, b) => a - b);
    let ret = [];
    let m = new Map();
    let f = false, f1 = false;
    arr.forEach((v, i, a) => {
        if (v !== a[i - 1]) {
            let curr = [v];
            const sum = 0 - v;
            for (let i1 = i + 1; i1 < arr.length; ++i1) {
                const v1 = arr[i1];
                if (m.has(sum - v1) && m.get(sum - v1) !== i1 && m.get(sum - v1) !== i && sum - v1 >= v && v1 >= sum - v1) {
                    if (!f && sum - v1 === v) {
                        f = true;
                    } else if (f && sum - v1 === v) {
                        continue;
                    }
                    if (!f1 && sum - v1 === v1) {
                        f1 = true;
                    } else if (f1 && sum - v1 === v1) {
                        continue;
                    }
                    curr.push(sum - v1);
                    curr.push(v1);
                    ret.push(curr);
                    curr = [v];
                } else {
                    m.set(v1, i1);
                }
            }
        }
    });
    return ret;
};

console.log(threeSum([0, 0, 0, 0]), [[0, 0, 0]]);
console.log(threeSum([-2, 0, 0, 2, 2]), [[-2, 0, 2]]);
console.log(threeSum([-1, 0, 1, 2, -1, -4]), [
    [-1, 0, 1],
    [-1, -1, 2]
]);
console.log(threeSum([-1, 0, 1, 2, -1, -4, 8, 8, 23, 4, 5, 6, 7]), [
    [-4, -1, 5],
    [-4, 0, 4],
    [-1, -1, 2],
    [-1, 0, 1]
]);
console.log(threeSum([1, 2, -2, -1]), []);
const long = require("../json_test_case/0015_3sum.json");
console.log(threeSum(long));  // TLE, 311 / 313 个通过测试用例
