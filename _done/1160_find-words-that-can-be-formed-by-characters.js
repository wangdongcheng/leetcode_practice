// 1160. Find Words That Can Be Formed by Characters
// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: 
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: 
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

// Note:

// 1 <= words.length <= 1000
// 1 <= words[i].length, chars.length <= 100
// All strings contain lowercase English letters only.

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    if (words.length === 0 || chars.length === 0) {
        return 0;
    }

    let charsCopy = chars,
        idx = 0,
        len = 0;

    for (let i = 0; i < words.length; i++) {
        chars = charsCopy;

        if (words[i].length > chars.length) {
            continue;
        }

        eachWord: {
            for (let j = 0; j < words[i].length; j++) {
                idx = chars.indexOf(words[i][j]);
                if (idx != -1) {
                    // chars.splice(idx, 1);    <-- chars.splice is not a function
                    chars = chars.substring(0, idx) + chars.substring(idx + 1, chars.length);
                } else {
                    break eachWord;
                }
            }
            len += words[i].length;
        }
    }

    return len;
};

console.log(countCharacters(["cat", "bt", "hat", "tree"], "tach") === 6);
console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr") === 10);