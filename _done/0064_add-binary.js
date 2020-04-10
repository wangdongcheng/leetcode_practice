// 67. Add Binary
// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:
// Each string consists only of '0' or '1' characters.
// 1 <= a.length, b.length <= 10^4
// Each string is either "0" or doesn't contain any leading zero.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    // can't work for big numbers
    // return (parseInt(a, 2) + parseInt(b, 2)).toString(2);

    const toInt = (val, idx, arr) => {
        arr[idx] = val === "1" ? 1 : 0;
    }
    let arrA = a.split("");
    let arrB = b.split("");
    let sumArr = [];
    arrA.forEach(toInt);
    arrB.forEach(toInt);

    let left = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0) {
        sum = left + (i >= 0 ? arrA[i] : 0) + (j >= 0 ? arrB[j] : 0);
        sumArr.unshift(sum % 2);
        left = sum >= 2 ? 1 : 0;
        i--;
        j--;
    }
    if (left === 1) {
        sumArr.unshift(1);
    }
    return sumArr.join("");
};

console.log(addBinary("11", "1") === "100");
console.log(addBinary("1010", "1011") === "10101");
console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011") === "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000");