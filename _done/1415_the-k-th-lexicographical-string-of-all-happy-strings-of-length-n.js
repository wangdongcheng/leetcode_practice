// 1415. The k-th Lexicographical String of All Happy Strings of Length n
// A happy string is a string that:

// consists only of letters of the set ['a', 'b', 'c'].
// s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).
// For example, strings "abc", "ac", "b" and "abcbabcbcb" are all happy strings and strings "aa", "baa" and "ababbc" are not happy strings.

// Given two integers n and k, consider a list of all happy strings of length n sorted in lexicographical order.

// Return the kth string of this list or return an empty string if there are less than k happy strings of length n.

// Example 1:

// Input: n = 1, k = 3
// Output: "c"
// Explanation: The list ["a", "b", "c"] contains all happy strings of length 1. The third string is "c".
// Example 2:

// Input: n = 1, k = 4
// Output: ""
// Explanation: There are only 3 happy strings of length 1.
// Example 3:

// Input: n = 3, k = 9
// Output: "cab"
// Explanation: There are 12 different happy string of length 3 ["aba", "abc", "aca", "acb", "bab", "bac", "bca", "bcb", "cab", "cac", "cba", "cbc"]. You will find the 9th string = "cab"
// Example 4:

// Input: n = 2, k = 7
// Output: ""
// Example 5:

// Input: n = 10, k = 100
// Output: "abacbabacb"
 
// Constraints:

// 1 <= n <= 10
// 1 <= k <= 100

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
    let i = 2;
    let prev = ["a", "b", "c"];
    let curr = ["a", "b", "c"];
    while (i <= n) {
        curr = [];
        for (let i = 0; i < prev.length; i++) {
            if (prev[i].endsWith("a")) {
                curr.push(prev[i] + "b");
                curr.push(prev[i] + "c");
            } else if (prev[i].endsWith("b")) {
                curr.push(prev[i] + "a");
                curr.push(prev[i] + "c");
            } else if (prev[i].endsWith("c")) {
                curr.push(prev[i] + "a");
                curr.push(prev[i] + "b");
            }
        }
        prev = curr.slice(0);
        i++;
    }
    return k <= curr.length ? curr[k - 1] : "";
};

console.log(getHappyString(1, 3) === "c");
console.log(getHappyString(1, 4) === "");
console.log(getHappyString(3, 9) === "cab");
console.log(getHappyString(2, 7) === "");
console.log(getHappyString(10, 100) === "abacbabacb");