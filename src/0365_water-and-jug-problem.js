// 365. Water and Jug Problem
// You are given two jugs with capacities x and y litres. There is an infinite amount of water supply available. You need to determine whether it is possible to measure exactly z litres using these two jugs.

// If z liters of water is measurable, you must have z liters of water contained within one or both buckets by the end.

// Operations allowed:

// Fill any of the jugs completely with water.
// Empty any of the jugs.
// Pour water from one jug into another till the other jug is completely full or the first jug itself is empty.
// Example 1: (From the famous "Die Hard" example)

// Input: x = 3, y = 5, z = 4
// Output: True
// Example 2:

// Input: x = 2, y = 6, z = 5
// Output: False

// To find the greatest common divisor
const gcd = (a, b) => {
    return (!b) ? a : gcd(b, a % b);
}

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function (x, y, z) {
    if (z > x + y) return false;
    return z === 0 ? true : (z % gcd(x, y) === 0);
};

console.log(canMeasureWater(1, 2, 3), true);
console.log(canMeasureWater(1, 1, 12), false);
console.log(canMeasureWater(0, 0, 0), true);
console.log(canMeasureWater(5, 3, 4), true);
console.log(canMeasureWater(2, 6, 5), false);