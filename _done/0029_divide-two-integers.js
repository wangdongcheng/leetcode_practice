// 29. Divide Two Integers
// Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

// Return the quotient after dividing dividend by divisor.

// The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = truncate(3.33333..) = 3.
// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = truncate(-2.33333..) = -2.
// Note:

// Both dividend and divisor will be 32-bit signed integers.
// The divisor will never be 0.
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
// For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) { // 2560 ms, 35.8 MB
    if (dividend === 0) return 0;
    if (dividend === divisor) return 1;
    if (Math.abs(dividend) < Math.abs(divisor)) return 0;
    let a = 1, b = 1;
    if (dividend < 0) {
        dividend *= -1;
        a = -1;
    }
    if (divisor < 0) {
        divisor *= -1;
        b = -1
    }
    const TOP = 2 ** 31 - 1;
    let sml = divisor;
    let pow = 0;
    let copy = 0;
    while (sml <= dividend) {
        copy = sml;
        if (sml >= TOP / 2) {
            sml = sml + sml;
        } else {
            sml <<= 1;
        }
        pow++;
    }
    pow--;
    sml = copy;
    let move = 0;
    while (sml <= dividend) {
        sml += divisor;
        move++;
    }
    move--;

    return Math.min((2 ** pow + move) * a * b, TOP);
};

const divideBenchMark = (dividend, divisor) => {  // 80 ms, 34.8 MB
    return Math.min(2 ** 31 - 1, Math.trunc(dividend / divisor));
}

const test = (dividend, divisor) => {
    console.log(divide(dividend, divisor) === divideBenchMark(dividend, divisor));
}

test(7, 2);
test(33, 3);
test(333, 88);
test(23523233, 2325363);
test(2, 3);
test(2147483647, 8426);
test(164987155, 987963);
test(2147483649, 1);
test(3, 55);
test(-453, 54);
test(8894786, -89856);
test(-88394398, -315619);