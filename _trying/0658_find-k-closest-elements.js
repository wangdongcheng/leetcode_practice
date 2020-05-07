// 658. Find K Closest Elements
// Given a sorted array, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.

// Example 1:
// Input: [1,2,3,4,5], k=4, x=3
// Output: [1,2,3,4]
// Example 2:
// Input: [1,2,3,4,5], k=4, x=-1
// Output: [1,2,3,4]
// Note:
// The value k is positive and will always be smaller than the length of the sorted array.
// Length of the given array is positive and will not exceed 10**4
// Absolute value of elements in the array and x will not exceed 10**4

// tags: binary search;

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElementsForceSearch = function (arr, k, x) { // too slow, need to use binary search
    const len = arr.length;
    if (x >= arr[len - 1]) {
        return arr.slice(len - k);
    } else if (x <= arr[0]) {
        return arr.slice(0, k);
    } else {
        let delt = [], ans = [];
        arr.forEach((val, idx, array) => {
            delt.push({
                sub: Math.abs(val - x),
                val: val
            });
        })
        delt.sort((a, b) => {
            if (a.sub !== b.sub) {
                return a.sub - b.sub;
            } else {
                return a.val - b.val;
            }
        });
        for (i = 0; i < k; i++) {
            ans.push(delt[i].val);
        }
        return ans.sort((a, b) => a - b);
    }
};

console.log(findClosestElements([1, 2, 3, 4, 5, 6], 4, 8), [3, 4, 5, 6]);
console.log(findClosestElements([1, 2, 3, 4, 5, 6], 4, 0), [1, 2, 3, 4]);
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3), [1, 2, 3, 4]);