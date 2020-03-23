// 面试题 17.16. The Masseuse LCCI
// A popular masseuse receives a sequence of back-to-back appointment requests and is debating which ones to accept. She needs a break between appointments and therefore she cannot accept any adjacent requests. Given a sequence of back-to-back appoint­ ment requests, find the optimal (highest total booked minutes) set the masseuse can honor. Return the number of minutes.

// Note: This problem is slightly different from the original one in the book.

// Example 1:
// Input:  [1,2,3,1]
// Output:  4
// Explanation:  Accept request 1 and 3, total minutes = 1 + 3 = 4

// Example 2:
// Input:  [2,7,9,3,1]
// Output:  12
// Explanation:  Accept request 1, 3 and 5, total minutes = 2 + 9 + 1 = 12

// Example 3:
// Input:  [2,1,4,5,3,1,1,3]
// Output:  12
// Explanation:  Accept request 1, 3, 5 and 8, total minutes = 2 + 4 + 3 + 3 = 12

/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function (nums) {
    // works but too slow, TLE
    if (false) {
        if (nums.length === 0) return 0;
        else if (nums.length === 1) return nums[0];
        else if (nums.length === 2) return Math.max(nums[0], nums[1]);
        else {
            let lastIdx = nums.length - 1,
                secondPrevArr = nums.slice(0, lastIdx - 1),
                prevArr = nums.slice(0, lastIdx);

            return Math.max(massage(secondPrevArr) + nums[lastIdx], massage(prevArr));
        }
    }

    // better dynamic planning, better performance
    if (nums.length === 0) return 0;
    
    let dp = new Array(nums.length);

    nums.forEach((val, idx, arr) => {
        if (idx === 0) dp[0] = val;
        else if (idx === 1) dp[1] = val > arr[0] ? val : arr[0];
        else {
            dp[idx] = Math.max(dp[idx - 2] + val, dp[idx - 1]);
        }
    });

    return dp.pop();
};

console.log(massage([]),0);
console.log(massage([1,2]),2);
console.log(massage([1, 2, 3, 1]), 4);
console.log(massage([2, 7, 9, 3, 1]), 12);
console.log(massage([2, 1, 4, 5, 3, 1, 1, 3]), 12);
console.log(massage([3, 4, 5, 6, 7, 88, 6, 5, 43, 32, 34, 5, 7, 9, 0]), 184);
console.log(massage([114, 117, 207, 117, 235, 82, 90, 67, 143, 146, 53, 108, 200, 91, 80, 223, 58, 170, 110, 236, 81, 90, 222, 160, 165, 195, 187, 199, 114, 235, 197, 187, 69, 129, 64, 214, 228, 78, 188, 67, 205, 94, 205, 169, 241, 202, 144, 240]), 4173);