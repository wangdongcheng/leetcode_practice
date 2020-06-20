// 44. Wildcard Matching
// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

// Note:

// s could be empty and contains only lowercase letters a-z.
// p could be empty and contains only lowercase letters a-z, and characters like ? or *.
// Example 1:

// Input:
// s = "aa"
// p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input:
// s = "aa"
// p = "*"
// Output: true
// Explanation: '*' matches any sequence.
// Example 3:

// Input:
// s = "cb"
// p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
// Example 4:

// Input:
// s = "adceb"
// p = "*a*b"
// Output: true
// Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
// Example 5:

// Input:
// s = "acdcb"
// p = "a*c?b"
// Output: false

// tags: dp; edit distance; regex

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const m = s.length + 1;
    const n = p.length + 1;
    let dp = [];

    for (let i = 0; i < m; ++i) {
        dp.push(new Array(n));
    }

    // dp[i][j] stands for isMatch(s[:i],p[:j])
    dp[0][0] = true;

    // dp[0][j] means s is empty string
    for (let j = 1; j < n; ++j) {
        dp[0][j] = p[j - 1] === "*" ? dp[0][j - 1] : false;
    }
    // dp[i][0] means empty pattern
    for (let i = 1; i < m; ++i) {
        dp[i][0] = false;
    }

    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === "?") {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === "*") {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
            } else {
                dp[i][j] = false;
            }
        }
    }

    return dp[m - 1][n - 1];
};

console.log(isMatch("aa", "a"), false);
console.log(isMatch("aa", "*"), true);
console.log(isMatch("cb", "?a"), false);
console.log(isMatch("adceb", "*a*b"), true);
console.log(isMatch("acdcb", "a*c?b"), false);
console.log(isMatch("acdcb", "a*c*b"), true);
console.log(isMatch("", ""), true);