// 面试题13. 机器人的运动范围
// 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

// 示例 1：
// 输入：m = 2, n = 3, k = 1
// 输出：3

// 示例 2：
// 输入：m = 3, n = 1, k = 0
// 输出：1

// 提示：
// 1 <= n,m <= 100
// 0 <= k <= 20

const digSum = num => {
    if (num / 10 < 1) return num;
    let sum = 0;
    while (num != 0) {
        sum += num % 10;
        num = (num - num % 10) / 10;
    }
    return sum;
}

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    if (k === 0) return 1;
    let step = 1;
    let matrix = [];
    let que = [];
    for (let i = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            if (digSum(i) + digSum(j) <= k) {
                row.push(1);
            } else {
                row.push(0);
            }
        }
        matrix.push(row);
    }
    que.push([0, 0]);
    matrix[0][0] = -1;

    while (que.length) {
        const len = que.length;
        for (let i = 0; i < len; i++) {
            const curr = que.shift();
            const x = curr[0];
            const y = curr[1];

            // only need check directions of Right and Down
            if (x < m - 1 && matrix[x + 1][y] > 0) {
                que.push([x + 1, y]);
                matrix[x + 1][y] = -1;
                step++;
            }
            if (y < n - 1 && matrix[x][y + 1] > 0) {
                que.push([x, y + 1]);
                matrix[x][y + 1] = 0;
                step++;
            }
        }
    }
    return step;
};

console.log(movingCount(2, 3, 1), 3);
console.log(movingCount(3, 1, 0), 1);
console.log(movingCount(16, 8, 4), 15);
console.log(movingCount(38, 15, 9), 135)

// console.log(digSum(344), 11);
// console.log(digSum(0), 0);
// console.log(digSum(10), 1);
// console.log(digSum(1342), 10);

