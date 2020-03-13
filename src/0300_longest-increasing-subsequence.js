// 300. Longest Increasing Subsequence
// Given an unsorted array of integers, find the length of longest increasing subsequence.

// Example:

// Input: [10,9,2,5,3,7,101,18]
// Output: 4 
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
// Note:

// There may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n2) complexity.
// Follow up: Could you improve it to O(n log n) time complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length <= 1) {
        return nums.length;
    }
    let cnt = 0,
        tmp = 0,
        cntArr = [];

    for (let i = 0; i < nums.length; i++) {
        tmp = nums[i];
        cnt = 0
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > tmp) {
                tmp = nums[j];
                cnt++;
            }
        }
        cntArr.push(cnt);
    }

    cntArr.sort();
    return cntArr[cntArr.length-1];
}


console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));