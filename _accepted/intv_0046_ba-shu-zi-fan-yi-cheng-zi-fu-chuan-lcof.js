// 面试题46. 把数字翻译成字符串
// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。
// 请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

// 示例 1:

// 输入: 12258
// 输出: 5
// 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"

// 提示：
// 0 <= num < 231

// tags: DP; 爬楼梯

/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    let arr = num.toString().split("");
    if (arr.length === 1) return 1;
    let dp = new Array(arr.length + 1);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i < dp.length; ++i) {
        const dig = parseInt(`${arr[i - 2]}${arr[i - 1]}`, 10);
        dp[i] = dp[i - 1] + (dig > 25 || dig < 10 ? 0 : dp[i - 2]);
    }
    return dp.pop();
};

console.log(translateNum(12258), 5);
console.log(translateNum(32124577), 5);
console.log(translateNum(214748364), 3);
console.log(translateNum(506), 1);