// 54. Spiral Matrix
// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:
// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length === 0) return [];

    let h = matrix.length;
    let w = matrix[0].length;
    const qty = h * w;
    let a = 0;
    let arr = [];

    while (true) {
        for (let i = a; i < w - a; i++) {
            arr.push(matrix[a][i]);
        }
        if (arr.length === qty) break;
        for (let i = a + 1; i < h - a; i++) {
            arr.push(matrix[i][w - a - 1]);
        }
        if (arr.length === qty) break;
        for (let i = w - 2 - a; i >= a; i--) {
            arr.push(matrix[h - a - 1][i]);
        }
        if (arr.length === qty) break;
        for (let i = h - 2 - a; i >= a + 1; i--) {
            arr.push(matrix[i][a]);
        }
        if (arr.length === qty) break;
        a++;
    }
    return arr;
};

console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));

console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]));

console.log(spiralOrder([[1, 2, 3, 4]]));
console.log(spiralOrder([[1], [2], [3], [4]]));