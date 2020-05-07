// 221. Maximal Square
// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example:

// Input: 

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// Output: 4

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (!matrix.length) return 0;
    // if (matrix.length === 1 && matrix[0][0] === "0") return 0;
    const h = matrix.length;
    const w = matrix[0].length;
    let ans = 0;

    matrix.forEach((line, row, mat) => {
        line.forEach((val, col, arr) => {
            if (val === "1") {
                let i = 1, sqr = 1;
                while (row + i <= h - 1 && col + i <= w - 1) {
                    for (let j = 0; j <= i; j++) {
                        sqr &= parseInt(matrix[row + i][col + j], 2);
                        sqr &= parseInt(matrix[row + j][col + i], 2);
                    }
                    if (sqr === 1) {
                        ans = Math.max(ans, (i + 1) ** 2);
                    } else {
                        break;
                    }
                    i++;
                }
                if (ans === 0) ans = 1;
            }
        })
    })
    return ans;
};

console.log(maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]]), 4);
console.log(maximalSquare([
    ["1", "1", "1", "0", "0"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]]), 9);
console.log(maximalSquare([]), 0);
console.log(maximalSquare([["0"]]), 0);
console.log(maximalSquare([["1"]]), 1);
console.log(maximalSquare([["0", "1"]]), 1);