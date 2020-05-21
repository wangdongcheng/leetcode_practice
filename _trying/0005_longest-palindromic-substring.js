// 5. Longest Palindromic Substring
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

//tags: 中心扩散

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindromeForceSearch = function (s) { // works but TLE
    if (s.length <= 1) return s;
    const len = s.length;
    let ret = s[0];
    let dist = 1;
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = len - 1; j >= i + dist; j--) {
            const sub = s.substring(i, j + 1);
            const rev = sub.split("").reverse().join("");
            if (sub === rev && sub.length > ret.length) {
                ret = sub;
                dist = ret.length;
            }
        }
    }
    return ret;
};

const longestPalindrome = s => {  // 中心扩散法
    if (s.length <= 1) {
        return s;
    } else if (s.length === 2) {
        if (s[0] === s[1]) {
            return s;
        } else {
            return s[0];
        }
    }

    let min = 1;
    let ret = "";
    let j = 1;
    for (let i = 1; i < s.length; i++) {
        j = 1;
        let curOdd = s[i];
        while (i - j >= 0 && i + j <= s.length - 1) { // 长度为奇数的回文
            if (s[i - j] !== s[i + j]) {
                break;
            } else {
                curOdd = `${s[i - j]}${curOdd}${s[i + j]}`;
            }
            j++;
        }
        ret = curOdd.length > ret.length ? curOdd : ret;

        let curEven = "";
        j = 1;
        while (i - j >= 0 && i + j - 1 <= s.length - 1) {  // 长度为偶数的回文
            if (s[i - j] !== s[i + j - 1]) {
                break;
            } else {
                curEven = `${s[i - j]}${curEven}${s[i + j - 1]}`;
            }
            j++;
        }
        ret = curEven.length > ret.length ? curEven : ret;
    }
    return ret;
}

console.log(longestPalindrome("babad"), "bab");
console.log(longestPalindrome("cbbd"), "bb");
console.log(longestPalindrome("dkielsooekdejdjkelslsidkelskjoagjerj;adskieldielssickrgiewlsg"), "jdj");
const long = require("../json_test_case/0005_longest-palindromic-substring.json");
console.log(longestPalindrome(long[0]), "ranynar");
console.log(longestPalindrome("aaaa"), "aaaa");