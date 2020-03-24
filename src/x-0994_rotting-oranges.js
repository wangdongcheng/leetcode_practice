/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let numOfRows = grid.length,
        numOfCols = grid[0].length,
        rowCopy = [];
        gridCopy = [];
        prevStr = "",
        currStr = grid.join(),
        minute = 0;

    while (currStr != prevStr) {
        prevStr = currStr;
        grid.forEach((row, rowIdx, gridArr) => {
            rowCopy = row.slice(0);
            row.forEach((val, colIdx, rowArr) => {
                if (val === 2) {
                    if (rowIdx >= 1) gridCopy[rowIdx - 1][colIdx] = 2;
                    if (rowIdx < numOfRows - 1) gridCopy[rowIdx + 1][colIdx] = 2;
                    if (colIdx >= 1) gridCopy[rowIdx][colIdx - 1] = 2;
                    if (colIdx < numOfCols - 1) gridCopy[rowIdx][colIdx + 1] = 2;
                }
            });
        });
        minute++;
        currStr = gridCopy.join();
        grid = gridCopy.slice(0);
    }
    return minute - 1;
};

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]), 4);
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]), -1);
console.log(orangesRotting([[0, 2]]), 0);
console.log(orangesRotting([[0]]), 0);
console.log(orangesRotting([[2, 0], [1, 0]]), 1);