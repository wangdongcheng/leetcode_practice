// 72. Edit Distance
// Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

// You have the following 3 operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

// Example 1:
// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

// Example 2:
// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let dp = [];
    const m = word1.length;
    const n = word2.length;
    if (m * n === 0) return m + n; // if either of 2 words is empty, return the length of other word
    // D[i][j] represents the distance of first i characters of word1 to first j characters of word2

    // boundaries of empty word cases
    for (let i = 0; i <= m; i++) {
        let row = [];
        for (let j = 0; j <= n; j++) {
            if (i === 0) {
                row.push(j);
            } else {
                if (j === 0) {
                    row.push(i);
                } else {
                    row.push(0);
                }
            }
        }
        dp.push(row);
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            let case1 = dp[i - 1][j - 1];
            let case2 = dp[i - 1][j] + 1;
            let case3 = dp[i][j - 1] + 1;
            if (word1.substr(i - 1, 1) != word2.substr(j - 1, 1)) {
                case1++;
            }
            dp[i][j] = Math.min(case1, case2, case3);
        }
    }
    return dp[m][n];
};

console.log(minDistance("horse", "ros"), 3);
console.log(minDistance("intention", "execution"), 5);
console.log(minDistance("dkeilskdie", "dki222"), 7);