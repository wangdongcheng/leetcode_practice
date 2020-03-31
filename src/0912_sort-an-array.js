// 912. Sort an Array
// Given an array of integers nums, sort the array in ascending order.

// Example 1:
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]

// Example 2:
// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]

// Constraints:
// 1 <= nums.length <= 50000
// -50000 <= nums[i] <= 50000

/**
 * @param {number[]} nums
 * @return {number[]}
 */
//  用JS库函数, 140 ms, 41.8 MB 
var sortArray_lib = function (nums) {
    return nums.sort((a, b) => a - b);
};

// 桶排序, 136 ms, 41.3 MB
const sortArray_bucket = nums => {
    let arr = new Int8Array(100000);
    nums.forEach(val => {
        arr[val + 50000]++;
    });
    nums = [];
    arr.forEach((val, idx) => {
        if (val != 0) {
            for (let i = 1; i <= val; i++) {
                nums.push(idx - 50000);
            }
        }
    });
    return nums;
}

// 快速排序, 156 ms, 54.6 MB
const sortArray_quick = nums => {
    if (nums.length <= 1) return nums;
    let pivot = nums.pop(),
        l = [],
        r = [];

    nums.forEach(val => {
        if (val < pivot) {
            l.push(val);
        } else {
            r.push(val);
        }
    });
    return sortArray_quick(l).concat(pivot, sortArray_quick(r));
}

console.log(sortArray_quick([1, 99, 87, 4, 32, -8, 4]));