// 498. Diagonal Traverse
// Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

// Example:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]

// Output:  [1,2,4,7,5,3,6,8,9]
// Note:

// The total number of elements of the given matrix will not exceed 10,000.
const log = (obj) => {
    if (false) {
        console.log(obj);
    }
}
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const sum = m + n - 2;
    let arr = [];
    for (let i = 0; i <= sum; i++) {
        if (i % 2 === 0) {
            for (let j = Math.min(i, m - 1); j >= 0; j--) {
                if (i - j >= n) continue;
                arr.push(matrix[j][i - j]);
                log(matrix[j][i - j]);
            }
        } else {
            for (let j = 0; j <= Math.min(i, n - 1); j++) {
                if (j >= m) continue;
                arr.push(matrix[j][Math.min(i, n - 1) - j]);
                log(matrix[j][i - j]);
            }
        }
    }
    return arr;
};

console.log(findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]), [1, 2, 4, 7, 5, 3, 6, 8, 9]);

console.log(findDiagonalOrder([
    [1, 2, 3, 4, 5],
    [11, 22, 33, 44, 55]
]), [1, 2, 11, 22, 3, 4, 33, 44, 5, 55]);

console.log(findDiagonalOrder([
    [1, 2],
    [3, 4],
    [11, 5],
    [22, 33],
    [44, 55]
]), [1, 2, 3, 11, 4, 5, 22, 44, 33, 55]);