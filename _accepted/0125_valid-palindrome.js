// 125. Valid Palindrome
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const filt = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let arr = s.split("").filter(ele => filt.indexOf(ele) !== -1);
    arr.forEach((v, i, a) => a[i] = v.toLowerCase());
    return arr.join("") === arr.reverse().join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama"), true);