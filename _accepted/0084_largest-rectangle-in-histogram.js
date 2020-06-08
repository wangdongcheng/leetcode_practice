// 84. Largest Rectangle in Histogram

// tags: 单调栈

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

const largestRectangleArea = heights => {
    if (!heights.length) return 0;
    heights.unshift(0);
    heights.push(0);  // 首尾各加上高度为0的柱，方便计算
    let ans = 0;
    let st = [];
    heights.forEach((h, i, a) => {
        while (st.length && st[st.length - 1].val > h) {
            // 若heights正遍历的柱子 h 小于栈顶的柱子
            // 栈顶柱子出栈，柱子命名为pop，出栈后的栈顶为top
            // 则对于pop来说，h和top就是左右的边界，也即是“高度为pop，宽度为h到top”能组成的“最大矩形”
            let pop = st.pop();
            let left = st[st.length - 1];
            ans = Math.max(ans, pop.val * (i - left.idx - 1));
        }
        st.push({
            val: h,
            idx: i
        });
    })
    return ans;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]), 10);
console.log(largestRectangleArea([2, 3, 1, 4, 2, 3]), 6);
console.log(largestRectangleArea([2, 65, 58, 9, 2, 1, 4, 6, 22, 36, 8, 9, 4, 14, 69]), 116);
const long = require("../json_test_case/0084_largest-rectangle-in-histogram.json");
console.log(largestRectangleArea(long) === 100000000);