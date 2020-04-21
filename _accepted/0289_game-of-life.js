// 289. Game of Life
// According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population..
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

// Example:
// Input: 
// [
//   [0,1,0],
//   [0,0,1],
//   [1,1,1],
//   [0,0,0]
// ]
// Output: 
// [
//   [0,0,0],
//   [1,0,1],
//   [0,1,1],
//   [0,1,0]
// ]

// Follow up:
// Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    const width = board[0].length;
    const height = board.length;
    const scanLive = (m, n) => {
        let live = 0;

        if (m + 1 < height && board[m + 1][n] === 1) live++;
        if (m - 1 >= 0 && board[m - 1][n] === 1) live++;
        if (n + 1 < width && board[m][n + 1] === 1) live++;
        if (n - 1 >= 0 && board[m][n - 1] === 1) live++;

        if (m + 1 < height && n + 1 < width && board[m + 1][n + 1] === 1) live++;
        if (m - 1 >= 0 && n - 1 >= 0 && board[m - 1][n - 1] === 1) live++;
        if (m + 1 < height && n - 1 >= 0 && board[m + 1][n - 1] === 1) live++;
        if (m - 1 >= 0 && n + 1 < width && board[m - 1][n + 1] === 1) live++;

        return live;
    }

    let toLive = [],
        toDead = [];

    board.forEach((row, i) => {
        row.forEach((val, j) => {
            if (val === 1 && scanLive(i, j) < 2) toDead.push([i, j]);
            if (val === 1 && scanLive(i, j) > 3) toDead.push([i, j]);
            if (val === 0 && scanLive(i, j) === 3) toLive.push([i, j]);
        })
    })
    toLive.forEach((val) => {
        board[val[0]][val[1]] = 1;
    })
    toDead.forEach((val) => {
        board[val[0]][val[1]] = 0;
    })
    return board;
};

console.log(gameOfLife([[1, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]));
console.log(gameOfLife([
    [1, 1, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 0, 1, 0]
]), [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 1, 0],
    [1, 0, 1, 0]
]);