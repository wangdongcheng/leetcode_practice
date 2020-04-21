// 47. Permutations II
// Given a collection of numbers that might contain duplicates, return all possible unique permutations.

// Example:

// Input: [1,1,2]
// Output:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    if (nums.length <= 1) {
        return [nums];
    } else {
        let prevArrs = permuteUnique(nums.slice(1));
        let ret = [];
        let uni = [];
        let str = "";
        prevArrs.forEach(row => {
            row.forEach((int, idx, arr) => {
                let copy = arr.slice(0);
                copy.splice(idx, 0, nums[0])
                str = copy.join("_");
                if (!uni.includes(str)) {
                    ret.push(copy);
                    uni.push(str);
                }
            })
            row.push(nums[0]);
            str = row.join("_");
            if (!uni.includes(str)) {
                ret.push(row);
                uni.push(str);
            }
        })
        return ret;
    }
};

console.log(permuteUnique([1, 1, 2]));