// 5351. Pizza With 3n Slices
// see markdown doc

/**
 * @param {number[]} slices
 * @return {number}
 */
var maxSizeSlices = function (slices) {

    const dpMeth = arr => {
        let dp = [];
        const len = arr.length;
        const round = (len + 1) / 3;
        for (let i = 0; i <= len; i++) {
            dp.push(new Int32Array(round + 1));
        }

        dp[1][1] = arr[0];
        for (let i = 1; i <= len; i++) {
            for (let j = 1; j <= round; j++) {
                dp[i][j] = Math.max((i >= 2 ? dp[i - 2][j - 1] : 0) + arr[i - 1], dp[i - 1][j]);
            }
        }
        return dp[len][round];
    }
    return Math.max(dpMeth(slices.slice(1)), dpMeth(slices.slice(0, slices.length - 1)));
};

console.log(maxSizeSlices([4, 1, 2, 5, 8, 3, 1, 9, 7]), 21);
console.log(maxSizeSlices([1, 2, 3, 4, 5, 6]), 10);
console.log(maxSizeSlices([22, 3, 4, 5, 6, 77, 4, 5, 6, 7, 8, 44, 5, 6, 7, 8, 9, 4, 5, 7, 68]), 217);    