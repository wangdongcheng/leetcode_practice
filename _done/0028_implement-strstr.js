// 28. Implement strStr()
// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // I: 68 ms, 33.7 MB
    // return haystack.indexOf(needle);

    // II: 52 ms, 35.1 MB
    if (!needle.length) {
        return 0;
    }
    if (!haystack.length) {
        return -1;
    }
    let len = needle.length;
    let start = haystack.indexOf(needle[0]);
    let isMathed = false;

    while (start != -1 && start + len <= haystack.length) {
        isMathed = true;
        for (let i = 0; i < len - 1; i++) {
            if (needle[i + 1] != haystack[start + i + 1]) {
                isMathed = false;
                break;
            }
        }
        if (isMathed) {
            return start;
        } else {
            start = haystack.indexOf(needle[0], start + 1);
        }
    }
    return -1;
};

console.log(strStr("hello", "ll"), 2);
console.log(strStr("aaaaa", "bba"), -1);
console.log(strStr("abc", ""), 0);
console.log(strStr("", ""), 0);
console.log(strStr("", "a"), -1);
console.log(strStr("mississippi", "pi"), 9);
console.log(strStr("hello", "ll"), 2);