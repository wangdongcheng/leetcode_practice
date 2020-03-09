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
    let bal = 0,
        val = 0,
        balArr = new Array(),
        len = 0;

    for (let i = s.indexOf('('); i < s.length; i++) {

        switch (s[i]) {
            case '(':
                val = 1;
                break;
            case ')':
                val = -1;
                break;
        }
        
        bal += val;
        balArr.push(bal);

        // if (bal === 0) {
        //     len = output.length > len ? output.length : len;
        // }
    }
    // if (bal > 0) {
    //     len = output.length - bal;
    // }
    debugger;
    let balLen = balArr.length,
        valid = new Array();

    let i = 0;
    while (i < balLen) {

        for (var j = i; j < balLen; j++) {
            len++;
            if (balArr[j] < 0) {
                len = 0;
                valid.push(0);
            } else if (balArr[j] === balArr[i] - 1) {
                valid.push(len);
                len = 0;
            }
        } i=j+1;
    }
    return valid;
};


console.log(longestValidParentheses("(()())"), 'expect:', 6);
console.log(longestValidParentheses("(()"), 'expect:', 2);
console.log(longestValidParentheses(")()())"), 'expect:', 4);
console.log(longestValidParentheses(")()((()()()())(()())"), 'expect:', 16);