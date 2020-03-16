// 32. Longest Valid Parentheses
// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Example 1:

// Input: "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()"
// Example 2:

// Input: ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()"

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    if (s.indexOf("(") === -1 || s.indexOf(")") === -1) {
        return 0;
    }

    let bal = 0,
        val = 0,
        ret = 0,
        len = 0;

    for (let i = s.indexOf('('); i < s.length; i++) {
        val = s[i] == "(" ? 1 : -1;
        bal += val;
        if (bal >= 0) {
            len++;
            if (bal == 0) {
                ret = Math.max(len, ret);
            }
        } else {
            bal = len = 0;
        }
    }

    len = val = bal = 0;
    for (let i = s.lastIndexOf(")"); i >= 0; i--) {
        val = s[i] == "(" ? -1 : 1;
        bal += val;
        if (bal >= 0) {
            len++;
            if (bal == 0) {
                ret = Math.max(len, ret);
            }
        } else {
            bal = len = 0;
        }
    }

    return ret;

};

// console.log("()))(".lastIndexOf(")"));

console.log(longestValidParentheses("(()())") === 6);
console.log(longestValidParentheses("(()") === 2);
console.log(longestValidParentheses(")()())") === 4);
console.log(longestValidParentheses(")()((()()()())(()())") === 16);
console.log(longestValidParentheses(")))") === 0);
console.log(longestValidParentheses(")(())))(())())") === 6);