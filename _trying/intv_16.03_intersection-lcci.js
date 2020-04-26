// 面试题 16.03. Intersection LCCI
// Given two straight line segments (represented as a start point and an end point), compute the point of intersection, if any. If there's no intersection, return an empty array.

// The absolute error should not exceed 10^-6. If there are more than one intersections, return the one with smallest X axis value. If there are more than one intersections that have same X axis value, return the one with smallest Y axis value.
// Example 1:

// Input: 
// line1 = {0, 0}, {1, 0}
// line2 = {1, 1}, {0, -1}
// Output:  {0.5, 0}

// Example 2:
// Input: 
// line1 = {0, 0}, {3, 3}
// line2 = {1, 1}, {2, 2}
// Output:  {1, 1}

// Example 3:
// Input: 
// line1 = {0, 0}, {1, 1}
// line2 = {1, 0}, {2, 1}
// Output:  {}  (no intersection)

// Note:
// The absolute value of coordinate value will not exceed 2^7.
// All coordinates are valid 2D coordinates.

// tags: There're bugs, currently leetcode no enough test cases to cover

/**
 * @param {number[]} start1
 * @param {number[]} end1
 * @param {number[]} start2
 * @param {number[]} end2
 * @return {number[]}
 */
var intersection = function (start1, end1, start2, end2) {
    // y = ax + b
    let a1, a2, b1, b2;
    let X1 = undefined,
        X2 = undefined;
    if (end1[0] - start1[0] === 0) {
        X1 = start1[0]
    } else {
        a1 = (end1[1] - start1[1]) / (end1[0] - start1[0]);
    }
    b1 = start1[1] - a1 * start1[0];
    if ((end2[0] - start2[0]) === 0) {
        X2 = start2[0];
    } else {
        a2 = (end2[1] - start2[1]) / (end2[0] - start2[0]);
    }
    b2 = start2[1] - a2 * start2[0];

    if (X1 != undefined && X2 != undefined && X1 === X2) {
        if (Math.max(start1[1], end1[1]) < Math.min(start2[1], end2[1]) ||
            Math.max(start2[1], end2[1]) < Math.min(start1[1], end1[1])) {
            return [];
        } else {
            return [X1, Math.max(Math.min(start1[1], end1[1]), Math.min(start2[1], end2[1]))];
        }
    } else if (X1 != undefined) {
        if (X1 < Math.min(start2[0], end2[0]) || X1 > Math.max(start2[0], end2[0])) {
            return [];
        } else {
            return [X1, a2 * X1 + b2]; // here goes bug
        }
    } else if (X2 != undefined) {

    }
    if (a1 === a2) {
        if (b1 != b2) {
            return [];
        } else {
            if (Math.max(start1[0], end1[0]) < Math.min(start2[0], end2[0]) ||
                Math.max(start2[0], end2[0]) < Math.min(start1[0], end1[0])) {
                return [];
            } else {
                return [Math.max(Math.min(start1[0], end1[0]), Math.min(start2[0], end2[0])), Math.max(Math.min(start1[1], end1[1]), Math.min(start2[1], end2[1]))];
            }
        }
    } else {
        let x = (b2 - b1) / (a1 - a2);
        if (x >= Math.min(start1[0], end1[0]) &&
            x <= Math.max(start1[0], end1[0]) &&
            x >= Math.min(start2[0], end2[0]) &&
            x <= Math.max(start2[0], end2[0])) {
            let y = a1 * x + b1;
            return [x, y];
        } else {
            return [];
        }
    }
};

console.log(intersection([0, 0], [1, 0], [1, 1], [0, -1]), [0.5, 0]);
console.log(intersection([0, 0], [3, 3], [1, 1], [2, 2]), [1, 1]);
console.log(intersection([0, 0], [1, 1], [1, 0], [2, 1]), []);
console.log(intersection([0, 0], [0, 1], [1, 0], [1, 1]), []);
console.log(intersection([0, 3], [0, 6], [0, 1], [0, 5]), [0, 3]);
console.log(intersection([1, 0], [1, 1], [-1, 0], [3, 2]), [1, 1]);
console.log(intersection([1, 0], [1, 1], [-1, -3], [3, -1]), []); // lack of test cases