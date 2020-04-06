// 5376. 非递增顺序的最小子序列

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
    if (nums.length <= 1) return nums;
    nums.sort((a, b) => b - a);
    let sum1 = 0,
        sum2 = 0,
        ret = [];
    for (let i = 0; i < nums.length; i++) {
        sum1 += nums[i];
        sum2 = 0;
        ret.push(nums[i]);
        for (let j = i + 1; j < nums.length; j++) {
            sum2 += nums[j];
        }
        if (sum1 > sum2) break;
    }
    return ret;
};

console.log(minSubsequence([4, 3, 10, 9, 8]), [10, 9]);
console.log(minSubsequence([4, 4, 7, 6, 7]), [7, 7, 6]);
console.log(minSubsequence([6]), [6]);