// 84. Largest Rectangle in Histogram

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleAreaForceSearch = function (heights) { // force search works but TLE
    if (!heights.length) return 0;
    let ret = Math.min(...heights) * heights.length;
    const len = heights.length;
    for (let i = 0; i < len; ++i) {
        for (let j = i + 1; j <= len; ++j) {
            ret = Math.max(ret, Math.min(...heights.slice(i, j)) * (j - i));
        }
    }
    return ret;
};

const largestRectangleArea = heights =>{
    
}

console.log(largestRectangleAreaForceSearch([2, 1, 5, 6, 2, 3]), 10);
console.log(largestRectangleAreaForceSearch([2, 65, 58, 9, 2, 1, 4, 6, 22, 36, 8, 9, 4, 14, 69]), 116);
const long = require("../json_test_case/0084_largest-rectangle-in-histogram.json");
console.log(largestRectangleAreaForceSearch(long));