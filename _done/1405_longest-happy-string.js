// 1405. Longest Happy String
// A string is called happy if it does not have any of the strings 'aaa', 'bbb' or 'ccc' as a substring.

// Given three integers a, b and c, return any string s, which satisfies following conditions:

// s is happy and longest possible.
// s contains at most a occurrences of the letter 'a', at most b occurrences of the letter 'b' and at most c occurrences of the letter 'c'.
// s will only contain 'a', 'b' and 'c' letters.
// If there is no such string s return the empty string "".

// Example 1:
// Input: a = 1, b = 1, c = 7
// Output: "ccaccbcc"
// Explanation: "ccbccacc" would also be a correct answer.

// Example 2:
// Input: a = 2, b = 2, c = 1
// Output: "aabbc"

// Example 3:
// Input: a = 7, b = 1, c = 0
// Output: "aabaa"
// Explanation: It's the only correct answer in this case.

// Constraints:
// 0 <= a, b, c <= 100
// a + b + c > 0

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
    let arr = [{
        char: "a",
        qty: a
    }, {
        char: "b",
        qty: b
    }, {
        char: "c",
        qty: c
    }];
    let str = "";
    while (true) {
        arr.sort((objA, objB) => objB.qty - objA.qty);
        if (arr[0].char != str[str.length - 1]) {
            if (arr[0].qty >= 2) {
                str += arr[0].char.repeat(2);
                arr[0].qty -= 2;
            } else if (arr[0].qty === 1) {
                str += arr[0].char;
                arr[0].qty -= 1;
            } else {
                return str;
            }
        } else if (arr[1].char != str[str.length - 1]) {
            if (arr[1].qty >= 2) {
                str += arr[1].char.repeat(2);
                arr[1].qty -= 2;
            } else if (arr[1].qty === 1) {
                str += arr[1].char;
                arr[1].qty -= 1;
            } else {
                break;
            }
        } else {
            break;
        }
    }
    arr.sort((objA, objB) => objB.qty - objA.qty);
    for (let i = 0; i < str.length - 1; i++) {
        if (arr[0].qty) {
            if (arr[0].char != str[i] && arr[0].char != str[i + 1]) {
                if (arr[0].qty >= 2) {
                    str = str.substr(0, i + 1) + arr[0].char.repeat(2) + str.substr(i + 1, str.length);
                    arr[0].qty -= 2;
                } else {
                    str = str.substr(0, i + 1) + arr[0].char + str.substr(i + 1, str.length);
                    arr[0].qty--;
                }
            }
        }
    }
    return str;
};

console.log(longestDiverseString(1, 1, 7), "ccaccbcc or ccbccacc");
console.log(longestDiverseString(2, 2, 1), "aabbc");
console.log(longestDiverseString(7, 1, 0), "aabaa");
console.log(longestDiverseString(8, 6, 2), "aabaabbaabbaaccb");
console.log(longestDiverseString(8, 6, 3), "aabaabbaabbccaabc");
console.log(longestDiverseString(9, 0, 0), "aa");
console.log(longestDiverseString(0, 8, 11), "ccbccbbccbbccbbccbc");
console.log(longestDiverseString(0, 8, 11).length, "ccbccbbccbbccbbccbc".length);
console.log(longestDiverseString(4, 42, 7), "bbcbbcbbcbbabbcbbabbcbbabbcbbabbcbb");
console.log(longestDiverseString(4, 42, 7).length, "bbcbbcbbcbbabbcbbabbcbbabbcbbabbcbb".length);