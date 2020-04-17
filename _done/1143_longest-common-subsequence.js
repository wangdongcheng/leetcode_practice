// 1143. Longest Common Subsequence
// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. 
// (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

// If there is no common subsequence, return 0.

// Example 1:
// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.

// Example 2:
// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.

// Example 3:
// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

// Constraints:
// 1 <= text1.length <= 1000
// 1 <= text2.length <= 1000
// The input strings consist of lowercase English characters only.

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let dp = [];    // dp[i][j] means the LCS of the first i chars in text1 and first j chars in text2
    const m = text1.length;  // i
    const n = text2.length;  // j

    for (let i = 0; i <= m; i++) {
        let row = new Int32Array(n + 1);
        dp.push(row);
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            let case1 = dp[i - 1][j];
            let case2 = dp[i][j - 1];
            let case3 = dp[i - 1][j - 1];
            if (text1[i - 1] === text2[j - 1]) {
                case3++;
            }
            dp[i][j] = Math.max(case1, case2, case3);
        }
    }
    return dp[m][n];
};

console.log(longestCommonSubsequence("abcde", "ace"), 3);
console.log(longestCommonSubsequence("abc", "abc"), 3);
console.log(longestCommonSubsequence("abc", "def"), 0);