// 485. Max Consecutive Ones
// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let i = 0;
    let j = 0;
    let ans = 0;
    while (i < nums.length) {
        j = 0;
        if (nums[i] === 1) {
            j = 1;
            while (nums[i + j] === 1) {
                j++
            }
            ans = Math.max(ans, j);
            i += j;
        } else {
            i++;
        }
    }
    return ans;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]), 3);
console.log(findMaxConsecutiveOnes([1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1]), 10);

