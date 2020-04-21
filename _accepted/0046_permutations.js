// 46. Permutations
// Given a collection of distinct integers, return all possible permutations.

// Example:
// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length <= 1) {
        return [nums];
    } else if (nums.length === 2) {
        return [[nums[0], nums[1]], [nums[1], nums[0]]];
    } else {
        let prevArrs = permute(nums.slice(1));
        let ret = [];
        prevArrs.forEach(row => {
            row.forEach((int, idx, arr) => {
                let copy = arr.slice(0);
                copy.splice(idx, 0, nums[0])
                ret.push(copy);
            })
            row.push(nums[0]);
            ret.push(row);
        })
        return ret;
    }
};

console.log(permute([1, 2, 4]));
console.log(permute([1, 2, 5, 6, 7, 8, 9, 11]));