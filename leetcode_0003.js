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


/**
 * @param {string} s
 * @return {number}
 */    

var lengthOfLongestSubstring = function(s) {
    if(s.length<2){
        return s.length;
    }

    var str = "";
    str = str + s[0];
    var count = 0;

    debugger;

    for(let i=1;i<s.length;i++){
        var idx = str.indexOf(s[i]);
        if(idx != -1){
            // console.log('found',s[i],'in',str);
            if(str.length > count){
                count = str.length;
            }
            str = str.substring(idx+1,str.length)+s[i];
            // console.log('now str is',str);
        }else{
            str = str+s[i];
            // console.log(output);
        }
    };
    var len = str.length;
    if(len > count){
        return len;
        }
    return count;
};

// console.log('pw'.substring(2,2)+'w');
console.log("pwwkew", lengthOfLongestSubstring("pwwkew") === 3 ? 'passed' : 'failed');
console.log("abcabcbb", lengthOfLongestSubstring("abcabcbb") === 3 ? 'passed': 'failed');
console.log("bbbbb", lengthOfLongestSubstring("bbbbb") === 1 ? 'passed': 'failed');
console.log("abcabcbb",lengthOfLongestSubstring("abcabcbb") === 3 ? 'passed': 'failed');
console.log(" ",lengthOfLongestSubstring(" ") === 1 ? 'passed': 'failed');
console.log("",lengthOfLongestSubstring("") === 0 ? 'passed': 'failed');
console.log("au",lengthOfLongestSubstring("au") === 2 ? 'passed': 'failed');