// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return "";
    } else if (strs.indexOf("") != -1) {
        return "";
    }
    let str = strs[0][0];
    let strLen = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < strs.length; i++) {
        if (strs[i][0] != str) {
            return "";
        }
        strLen = Math.min(strLen, strs[i].length);
    }
    scan: {
        for (let j = 1; j < strLen; j++) {
            let curr = strs[0][j];
            for (let i = 1; i < strs.length; i++) {
                if (strs[i][j] != curr) {
                    return str;
                }
            }
            str += curr;
        }
    }
    return str;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]) === "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]) === "");