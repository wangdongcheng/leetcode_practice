// 01.06. Compress String LCCI
// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

// Example 1:

// Input: "aabcccccaaa"
// Output: "a2b1c5a3"
// Example 2:

// Input: "abbccd"
// Output: "abbccd"
// Explanation: 
// The compressed string is "a1b2c2d1", which is longer than the original string.

/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
    if (S.length === 0) {
        return "";
    }
    let compressArr = [],
        tmp = S[0],
        count = 1;

    for (let i = 1; i < S.length; i++) {
        if (S[i] != tmp) {
            compressArr.push(tmp);
            compressArr.push(count);
            tmp = S[i];
            count = 1;
        } else {
            count++;
        }
    }
    compressArr.push(tmp);
    compressArr.push(count);

    if (compressArr.length < S.length) {
        return compressArr.join("");
    } else {
        return S;
    }
};