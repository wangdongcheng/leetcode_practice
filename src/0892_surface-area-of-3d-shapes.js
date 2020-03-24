// 892. Surface Area of 3D Shapes

// On a N * N grid, we place some 1 * 1 * 1 cubes.
// Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).
// Return the total surface area of the resulting shapes.

// Example 1:
// Input: [[2]]
// Output: 10

// Example 2:
// Input: [[1,2],[3,4]]
// Output: 34

// Example 3:
// Input: [[1,0],[0,2]]
// Output: 16

// Example 4:
// Input: [[1,1,1],[1,0,1],[1,1,1]]
// Output: 32

// Example 5:
// Input: [[2,2,2],[2,1,2],[2,2,2]]
// Output: 46

// Note:
// 1 <= N <= 50
// 0 <= grid[i][j] <= 50

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
    if (grid === [[0]]) return 0;

    let len = grid.length,
        surfc = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            surfc += grid[i][j] > 0 ? (4 * grid[i][j] + 2) : 0;
            surfc -= (j < len - 1 && grid[i][j + 1] > 0) ? 2 * Math.min(grid[i][j], grid[i][j + 1]) : 0;
            surfc -= (i < len - 1 && grid[i + 1][j] > 0) ? 2 * Math.min(grid[i][j], grid[i + 1][j]) : 0;
        }
    }
    return surfc;
};

console.log(surfaceArea([[2]]), 10);
console.log(surfaceArea([[1, 2], [3, 4]]), 34);
console.log(surfaceArea([[1, 0], [0, 2]]), 16);
console.log(surfaceArea([[1, 1, 1], [1, 0, 1], [1, 1, 1]]), 32);
console.log(surfaceArea([[2, 2, 2], [2, 1, 2], [2, 2, 2]]), 46);
console.log(surfaceArea([[23, 4, 5, 6], [5, 25, 36, 14], [29, 14, 5, 17, 48], [22, 47, 33, 6]]), 702);
