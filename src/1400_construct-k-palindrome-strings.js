// 1400. Construct K Palindrome Strings
// Given a string s and an integer k. You should construct k non-empty palindrome strings using all the characters in s.

// Return True if you can use all the characters in s to construct k palindrome strings or False otherwise.

// Example 1:
// Input: s = "annabelle", k = 2
// Output: true
// Explanation: You can construct two palindromes using all characters in s.
// Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"

// Example 2:
// Input: s = "leetcode", k = 3
// Output: false
// Explanation: It is impossible to construct 3 palindromes using all the characters of s.

// Example 3:
// Input: s = "true", k = 4
// Output: true
// Explanation: The only possible solution is to put each character in a separate string.

// Example 4:
// Input: s = "yzyzyzyzyzyzyzy", k = 2
// Output: true
// Explanation: Simply you can put all z's in one string and all y's in the other string. Both strings will be palindrome.

// Example 5:
// Input: s = "cr", k = 7
// Output: false
// Explanation: We don't have enough characters in s to construct 7 palindromes.

// Constraints:
// 1 <= s.length <= 10^5
// All characters in s are lower-case English letters.
// 1 <= k <= 10^5

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
    if (k > s.length) return false;
    if (k === s.length) return true;
    let m = new Map();
    const len = s.length;
    for (let i = 0; i < len; i++) {
        if (!m.has(s[i])) {
            m.set(s[i], 1);
        } else {
            let qty = m.get(s[i]) + 1;
            m.set(s[i], qty);
        }
    }
    let odd = 0;
    for (val of m.values()) {
        if (val % 2 != 0) {
            odd++;
        }
    }
    if (odd <= k) {
        return true;
    }
    return false;
};

console.log(canConstruct("annabelle", 2), true);
console.log(canConstruct("yzyzyzyzyzyzyzy", 2), true);
console.log(canConstruct("leetcode", 3), false);
console.log(canConstruct("cr", 7), false);
console.log(canConstruct("true", 4), true);