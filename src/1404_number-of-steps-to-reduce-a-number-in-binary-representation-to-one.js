// 1404. Number of Steps to Reduce a Number in Binary Representation to One
// Given a number s in their binary representation. Return the number of steps to reduce it to 1 under the following rules:

// If the current number is even, you have to divide it by 2.

// If the current number is odd, you have to add 1 to it.

// It's guaranteed that you can always reach to one for all testcases.

// Example 1:
// Input: s = "1101"
// Output: 6
// Explanation: "1101" corressponds to number 13 in their decimal representation.
// Step 1) 13 is odd, add 1 and obtain 14. 
// Step 2) 14 is even, divide by 2 and obtain 7.
// Step 3) 7 is odd, add 1 and obtain 8.
// Step 4) 8 is even, divide by 2 and obtain 4.  
// Step 5) 4 is even, divide by 2 and obtain 2. 
// Step 6) 2 is even, divide by 2 and obtain 1.  

// Example 2:
// Input: s = "10"
// Output: 1
// Explanation: "10" corressponds to number 2 in their decimal representation.
// Step 1) 2 is even, divide by 2 and obtain 1.  

// Example 3:
// Input: s = "1"
// Output: 0

// Constraints:

// 1 <= s.length <= 500
// s consists of characters '0' or '1'
// s[0] == '1'

/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
    if (s === "1") return 0;
    let step = 0,
        arr = s.split("");

    while (!(arr.length === 1 && arr[0] == "1")) {
        if (arr[arr.length - 1] === "0") { // even
            arr = arr.slice(0, arr.length - 1);
        } else {                         // odd
            for (let i = arr.length - 1; i >= 0; i--) {
                if (arr[i] === "1") {
                    arr[i] = "0";
                } else {
                    arr[i] = "1";
                    break;
                }
            }
            if (arr[0] === "0") {
                arr.unshift("1");
            }
        }
        step++;
    }
    return step;
};


console.log(numSteps("1101"), 6);
console.log(numSteps("10"), 1);
console.log(numSteps("1"), 0);
console.log(numSteps("1111011110000011100000110001011011110010111001010111110001"), 85);