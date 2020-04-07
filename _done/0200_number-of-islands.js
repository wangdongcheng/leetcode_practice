// 200. Number of Islands
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (grid.length === 0) return 0;

    let height = grid.length,
        width = grid[0].length,
        que = [],
        hasIsland = false,
        num = 0;

    while (true) {
        hasIsland = false;
        findIsland: {
            for (let i = 0; i < height; i++) {
                for (let j = 0; j < width; j++) {
                    if (grid[i][j] === "1") {
                        hasIsland = true;
                        que.push([i, j]);
                        grid[i][j] = "0";
                        if (j <= width - 2 && grid[i][j + 1] === "0" || j === width - 1) {
                            break findIsland;
                        }
                    }
                }
            }
        }
        if (!hasIsland) break;
        num++;
        while (que.length) {
            let len = que.length;
            for (let i = 0; i < len; i++) {
                const pos = que.shift();
                const x = pos[0];
                const y = pos[1];
                if (x > 0 && grid[x - 1][y] === "1") {
                    que.push([x - 1, y]);
                    grid[x - 1][y] = "0";
                }
                if (x < height - 1 && grid[x + 1][y] === "1") {
                    que.push([x + 1, y]);
                    grid[x + 1][y] = "0";
                }
                if (y > 0 && grid[x][y - 1] === "1") {
                    que.push([x, y - 1]);
                    grid[x][y - 1] = "0";
                }
                if (y < width - 1 && grid[x][y + 1] === "1") {
                    que.push([x, y + 1]);
                    grid[x][y + 1] = "0";
                }
            }
        }
    }
    return num;
};

console.log(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]), 1);

console.log(numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]), 3);

console.log(numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "1", "0", "1", "1"],
    ["0", "1", "1", "1", "0"],
    ["0", "1", "0", "1", "1"]
]), 3);

console.log(numIslands([
    ["1", "1", "0", "0", "1", "0"],
    ["1", "1", "0", "0", "1", "0"],
    ["0", "1", "1", "0", "1", "0"],
    ["0", "1", "0", "0", "0", "1"],
    ["0", "0", "1", "1", "1", "0"],
    ["0", "1", "0", "0", "0", "1"],
    ["0", "1", "1", "1", "1", "0"]
]), 6);

console.log(numIslands([
    ["1", "1", "0", "1", "1", "0"],
    ["1", "1", "0", "1", "1", "1"],
    ["0", "1", "1", "1", "1", "1"],
    ["0", "1", "0", "1", "0", "1"],
    ["1", "1", "1", "1", "1", "1"],
    ["1", "1", "0", "0", "1", "0"],
    ["1", "0", "1", "1", "1", "0"],
    ["0", "1", "0", "0", "0", "1"],
    ["0", "1", "1", "1", "1", "0"]
]), 3);