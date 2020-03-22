// 20. Valid Parentheses
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 != 0) {
        return false;
    }
    let bit = 0, tmp;
    for (let i = 0; i < s.length; i++) {
        if ((s[i] === '(') || (s[i] === ')')) {
            tmp = 1;
        } else if ((s[i] === '[') || (s[i] === ']')) {
            tmp = 2;
        } else if ((s[i] === '{') || (s[i] === '}')) {
            tmp = 3;
        }
        console.log('before', bit);
        bit = bit ^ tmp;
        console.log('after', bit);
        console.log(s[i] + s[0]);
        if ((bit === 0)
            && (s[i] + s[0] != ')(') && (s[i] + s[0] != '][') && (s[i] + s[0] != '}{')
            && (s[i] + s[i - 1] != ')(') && (s[i] + s[i - 1] != '][') && (s[i] + s[i - 1] != '}{')
            && (s.length > 0)) {
            return false;
        }
    }

    if (bit != 0) {
        // console.log('bingo3');
        return false;
    }

    return true;
}