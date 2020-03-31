// 695. Max Area of Island

// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.

// Example 2:
// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.

// Note: The length of each dimension in the given grid does not exceed 50.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    if (grid.length === 0) return 0;

    let height = grid.length,
        width = grid[0].length,
        que = [],
        hasIsland = false,
        size = 0,
        maxSize = 0;

    while (true) {
        size = 0;
        hasIsland = false;
        findIsland: {
            for (let i = 0; i < height; i++) {
                for (let j = 0; j < width; j++) {
                    if (grid[i][j] === 1) {
                        hasIsland = true;
                        que.push([i, j]);
                        grid[i][j] = 0;

                        if (j <= width - 2 && grid[i][j + 1] === 0 || j === width - 1) {
                            break findIsland;
                        }
                    }
                }
            }
        }
        if (!hasIsland) break;
        while (que.length) {
            let len = que.length;
            size += len;
            for (let i = 0; i < len; i++) {
                const pos = que.shift();
                const x = pos[0];
                const y = pos[1];
                if (x > 0 && grid[x - 1][y] === 1) {
                    que.push([x - 1, y]);
                    grid[x - 1][y] = 0;
                }
                if (x < height - 1 && grid[x + 1][y] === 1) {
                    que.push([x + 1, y]);
                    grid[x + 1][y] = 0;
                }
                if (y > 0 && grid[x][y - 1] === 1) {
                    que.push([x, y - 1]);
                    grid[x][y - 1] = 0;
                }
                if (y < width - 1 && grid[x][y + 1] === 1) {
                    que.push([x, y + 1]);
                    grid[x][y + 1] = 0;
                }
            }
        }
        maxSize = Math.max(maxSize, size);
    }
    return maxSize;
};

console.log(maxAreaOfIsland([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1]
]), 4);

console.log(maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
]), 6);

console.log(maxAreaOfIsland([[0]]), 0);