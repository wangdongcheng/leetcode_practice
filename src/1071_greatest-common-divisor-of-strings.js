// 1071. Greatest Common Divisor of Strings
// For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T concatenated with itself 1 or more times)

// Return the largest string X such that X divides str1 and X divides str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

// Note:

// 1 <= str1.length <= 1000
// 1 <= str2.length <= 1000
// str1[i] and str2[i] are English uppercase letters.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var commStr = function (str) {
    let commArr = [],
        comm = "",
        compare = "";

    for (let i = 0; i < str.length; i++) {
        comm += str[i];
        if (str.length % comm.length === 0) {
            for (let j = 0; j < str.length / comm.length; j++) {
                compare += comm;
            }
            if (str === compare) {
                commArr.push(comm);
            }
            compare = "";
        }
    }
    return commArr;
}

var gcdOfStrings = function (str1, str2) {
    if (str1.length === 0 || str2.length === 0) {
        return "";
    }
    if (str1.length === str2.length) {
        if (str1 != str2) {
            return "";
        } else {
            return str1;
        }
    }

    let commArr1 = commStr(str1),
        commArr2 = commStr(str2);

    for (let i = commArr1.length - 1; i >= 0; i--) {
        if (commArr2.indexOf(commArr1[i]) != -1) {
            return commArr1[i];
        }
    }
    return "";
};


console.log(gcdOfStrings("ABABABAB",'AB'));
console.log(gcdOfStrings("ABCABCABCABC","ABC"));
console.log(gcdOfStrings("ABCDEF","ABC"));