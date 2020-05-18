// 680. Valid Palindrome II
// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.
// Note:
// The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

// tags: 双指针

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    if (s.length === 1) return true;
    let mid = Math.floor((s.length - 1) / 2),
        i = 0,
        j = s.length - 1,
        deleted = false,
        r1 = true,
        r2 = true;

    while (i < j) {
        if (s[i] !== s[j]) {
            if (!deleted) {
                st = i, en = j;
                if (s[i] === s[j - 1]) {
                    deleted = true;
                    j--;
                    continue;
                } else {
                    r1 = false;
                    break;
                }
            } else {
                r1 = false;
                break;
            }
        }
        i++;
        j--;
    }
    // try another possibility
    deleted = false;
    i = 0;
    j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            if (!deleted) {
                if (s[i + 1] === s[j]) {
                    deleted = true;
                    i++;
                    continue;
                } else {
                    r2 = false;
                    break;
                }
            } else {
                r2 = false;
                break;
            }
        }
        i++;
        j--;
    }
    return r1 || r2;
};

console.log(validPalindrome("abca"), true);
console.log(validPalindrome("aba"), true);
console.log(validPalindrome("abcd"), false);
console.log(validPalindrome("deeee"), true);
console.log(validPalindrome("tcaac"), true);
console.log(validPalindrome("ebcbbcecabbacecbbcbe"), true);
console.log(validPalindrome("ebcbbececabbacecbbcbe"), true);