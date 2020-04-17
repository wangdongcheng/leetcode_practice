// 120. Triangle
// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

// For example, given the following triangle

// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

// Note:

// Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    if (triangle.length === 1) {
        return triangle[0][0];
    } else if (triangle.length === 2) {
        return Math.min(triangle[0][0] + triangle[1][0], triangle[0][0] + triangle[1][1]);
    }
    let prev = [triangle[0][0] + triangle[1][0], triangle[0][0] + triangle[1][1]];
    let dp = []; // for each row, dp = [[pos,val]]
    let h = triangle.length;

    for (let i = 2; i < h; i++) {
        dp = [];
        dp.push(prev[0] + triangle[i][0]);
        triangle[i].forEach((val, idx) => {
            if (idx > 0 && idx < i) {
                dp.push(Math.min(val + prev[idx - 1], val + prev[idx]));
            }
        })
        dp.push(prev[prev.length - 1] + triangle[i][i]);
        prev = dp.slice(0);
    }
    return Math.min(...dp);
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]), 11);
console.log(minimumTotal([[2], [3, 4], [6, 2, 7], [4, 0, 8, 3], [33, 2, 56, 2, 1]]), 9);
console.log(minimumTotal([[1], [-5, -2], [3, 6, 1], [-1, 2, 4, -3]]), -3);
