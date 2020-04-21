// 118. Pascal's Triangle (杨辉三角)

// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1, 1]];

    let prevTri = generate(numRows - 1),
        prevRow = prevTri[numRows - 2],
        curr = [];

    curr.push(1);
    prevRow.forEach((val, idx, arr) => {
        if (idx > 0) curr.push(val + arr[idx - 1]);
    });
    curr.push(1);
    prevTri.push(curr);

    return prevTri;
};

console.log(generate(3));
console.log(generate(5));
console.log(generate(8));