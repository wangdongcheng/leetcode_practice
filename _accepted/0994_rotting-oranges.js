/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let que = [],
        curr = [],
        colLen = grid.length,
        rowLen = grid[0].length,
        allRotted = true,
        queLen = 0,
        minCnt = 0;

    for (let i = 0; i < colLen; i++) {
        for (let j = 0; j < rowLen; j++) {
            if (grid[i][j] === 2) {
                que.push([i, j]);
            } else if (grid[i][j] === 1) {
                allRotted = false;
            }

        }
    }
    if (allRotted) return 0;

    //rotting
    while (que.length > 0) {
        queLen = que.length;
        // continueFlag = false;
        for (let i = 0; i < queLen; i++) {
            curr = que.shift();
            for (let i = curr[0] - 1; i >= 0 && i >= curr[0] - 1; i--) {
                if (grid[i][curr[1]] === 1) que.push([i, curr[1]]); grid[i][curr[1]] = 2;
            }
            for (let i = curr[0] + 1; i <= curr[0] + 1 && i < colLen; i++) {
                if (grid[i][curr[1]] === 1) que.push([i, curr[1]]); grid[i][curr[1]] = 2;
            }
            for (let i = curr[1] - 1; i >= 0 && i >= curr[1] - 1; i--) {
                if (grid[curr[0]][i] === 1) que.push([curr[0], i]); grid[curr[0]][i] = 2;
            }
            for (let i = curr[1] + 1; i <= curr[1] + 1 && i < rowLen; i++) {
                if (grid[curr[0]][i] === 1) que.push([curr[0], i]); grid[curr[0]][i] = 2;
            }
        }
        minCnt++;
    }
    for (let i = 0; i < colLen; i++) {
        for (let j = 0; j < rowLen; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }
    return minCnt - 1;
};

console.log(orangesRotting([[2, 1, 1], [1, 1, 2], [0, 2, 1]]), 1);
console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]), 4)
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]), -1);
console.log(orangesRotting([[0, 2]]), 0);
console.log(orangesRotting([[0]]), 0);
console.log(orangesRotting([[2, 0], [1, 0]]), 1);
console.log(orangesRotting([[0, 1, 0]]), -1);
console.log(orangesRotting([[0, 2, 0], [2, 0, 0]]), 0);