// 1162. As Far from Land as Possible

// Given an N x N grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized and return the distance.
// The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.

// If no land or water exists in the grid, return -1.

// Example 1:
// Input: 
// [
//     [1,0,1],
//     [0,0,0],
//     [1,0,1]
// ]
// Output: 2
// Explanation: 
// The cell (1, 1) is as far as possible from all the land with distance 2.

// Example 2:
// Input:
// [
//     [1,0,0],
//     [0,0,0],
//     [0,0,0]
// ]
// Output: 4
// Explanation: 
// The cell (2, 2) is as far as possible from all the land with distance 4.

// Note:
// 1 <= grid.length == grid[0].length <= 100
// grid[i][j] is 0 or 1

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
    let arr0 = [],
        arr1 = [],
        eachDist = Number.MAX_SAFE_INTEGER,
        dist = 0;

    grid.forEach((row, i) => {
        row.forEach((val, j) => {
            if (val === 0) {
                arr0.push([i, j]);
            } else {
                arr1.push([i, j]);
            }
        });
    });
    if (!arr0.length || !arr1.length) return -1;
    arr0.forEach(pos0 => {
        eachDist = Number.MAX_SAFE_INTEGER;
        arr1.forEach(pos1 => {
            eachDist = Math.min(eachDist, Math.abs(pos0[0] - pos1[0]) + Math.abs(pos0[1] - pos1[1]));
        });
        dist = Math.max(dist, eachDist);
    });
    return dist;
};

console.log(maxDistance([[1, 0, 1], [0, 0, 0], [1, 0, 1]]), 2);
console.log(maxDistance([[1, 0, 0], [0, 0, 0], [0, 0, 0]]), 4);
console.log(maxDistance([[1, 0, 1, 0, 1], [1, 1, 0, 0, 0], [1, 0, 1, 0, 1], [1, 1, 0, 0, 1]]), 2);
