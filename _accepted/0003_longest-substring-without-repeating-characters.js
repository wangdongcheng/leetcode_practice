// 3. Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// tags: 滑动窗口

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
    if (s.length < 2) {
        return s.length;
    }
    let sub = new Set();
    let ret = 0;
    let i = j = 0;
    while (i < s.length) {
        while (j < s.length) {
            if (!sub.has(s[j])) {
                sub.add(s[j]);
                ret = Math.max(ret, sub.size);
            } else {
                sub.delete(s[i]);
                break;
            }
            j++;
        }
        i++;
    }
    return ret;
};

console.log("pwwkew", lengthOfLongestSubstring("pwwkew") === 3 ? 'passed' : 'failed');
console.log("abcabcbb", lengthOfLongestSubstring("abcabcbb") === 3 ? 'passed' : 'failed');
console.log("bbbbb", lengthOfLongestSubstring("bbbbb") === 1 ? 'passed' : 'failed');
console.log("abcabcbb", lengthOfLongestSubstring("abcabcbb") === 3 ? 'passed' : 'failed');
console.log(" ", lengthOfLongestSubstring(" ") === 1 ? 'passed' : 'failed');
console.log("", lengthOfLongestSubstring("") === 0 ? 'passed' : 'failed');
console.log("au", lengthOfLongestSubstring("au") === 2 ? 'passed' : 'failed');