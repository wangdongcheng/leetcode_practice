// 542. 01 Matrix
// Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// Example 1:
// Input:
// [[0,0,0],
//  [0,1,0],
//  [0,0,0]]

// Output:
// [[0,0,0],
//  [0,1,0],
//  [0,0,0]]

// Example 2:
// Input:
// [[0,0,0],
//  [0,1,0],
//  [1,1,1]]

// Output:
// [[0,0,0],
//  [0,1,0],
//  [1,2,1]]

// Note:

// The number of elements of the given matrix will not exceed 10,000.
// There are at least one 0 in the given matrix.
// The cells are adjacent in only four directions: up, down, left and right.

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
    const height = matrix.length;
    const width = matrix[0].length;
    let m = new Map();
    let que = [];
    let dist = 1;

    matrix.forEach((row, i) => {
        row.forEach((val, j) => {
            if (val === 0) {
                que.push([i, j]);
            }
        })
    })

    while (que.length) {
        let len = que.length;
        let arr = [];
        for (let i = 0; i < len; i++) {
            const pos = que.shift();
            const x = pos[0];
            const y = pos[1];
            if (x > 0 && matrix[x - 1][y] > 0) {
                que.push([x - 1, y]);
                arr.push([x - 1, y]);
                matrix[x - 1][y] = -1;
            }
            if (x < height - 1 && matrix[x + 1][y] > 0) {
                que.push([x + 1, y]);
                arr.push([x + 1, y]);
                matrix[x + 1][y] = -1;
            }
            if (y > 0 && matrix[x][y - 1] > 0) {
                que.push([x, y - 1]);
                arr.push([x, y - 1]);
                matrix[x][y - 1] = -1;
            }
            if (y < width - 1 && matrix[x][y + 1] > 0) {
                que.push([x, y + 1]);
                arr.push([x, y + 1]);
                matrix[x][y + 1] = 0;
            }
        }
        if (arr.length) {
            m.set(dist, arr);
        }
        dist++;
    }
    if (m.size) {
        for (let [key, posArr] of m) {
            posArr.forEach(pos => {
                matrix[pos[0]][pos[1]] = key;
            })
        }
    }
    return matrix;
};

console.log(updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1]
]))

console.log(updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]))

console.log(updateMatrix([
    [1, 0, 0, 1], 
    [0, 0, 1, 1], 
    [1, 1, 1, 0]
]));