// 151. Reverse Words in a String
// Given an input string, reverse the string word by word.

// Example 1:
// Input: "the sky is blue"
// Output: "blue is sky the"

// Example 2:
// Input: "  hello world!  "
// Output: "world! hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// Example 3:
// Input: "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

// Note:
// A word is defined as a sequence of non-space characters.
// Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.

// Follow up:
// For C programmers, try to solve it in-place in O(1) extra space.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.split(" ");
    let ret = [];
    arr.forEach(val => {
        if (val != "") {
            ret.unshift(val);
        }
    })
    return ret.join(" ");
};

console.log(reverseWords("the sky is blue") === "blue is sky the");
console.log(reverseWords("  hello world!  ") === "world! hello");
console.log(reverseWords("a good   example") === "example good a");