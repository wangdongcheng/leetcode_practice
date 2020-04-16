// 55. Jump Game
// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:
// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:

// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump_poor = function (nums) {
    let dp = []; // dp[i] = true or false, means if the index i is accessible
    for (let i = 0; i < nums.length; i++) {
        dp[i] = false;
    }
    dp[0] = true;
    nums.forEach((val, idx, arr) => {
        for (let i = 1; i <= val && idx + i < nums.length; i++) {
            if (!dp[idx + i]) {
                dp[idx + i] = true;
            }
        }
    })
    let ans = dp[0];
    for (let i = 1; i < nums.length; i++) {
        ans = ans && dp[i];
        if (!ans) {
            return false;
        }
    }
    return true;
};

var canJump = function (nums) {
    if (!nums.length) {
        return false;
    } else if (nums.length === 1) {
        return true;
    }
    let max = 0; // the longest accessible distance
    for (let i = 0; i < nums.length - 1 && i <= max; i++) {
        max = Math.max(max, i + nums[i]);
        if (max >= nums.length - 1) {
            return true;
        }
    }
    return false;
}

console.log(canJump([2, 3, 1, 1, 4]), true);
console.log(canJump([3, 2, 1, 0, 4]), false);
console.log(canJump([3, 2, 1, 0, 4, 2]), false);
console.log(canJump([3, 2, 2, 0, 4, 2]), true);
console.log(canJump([0]), true);
console.log(canJump([0, 1]), false);