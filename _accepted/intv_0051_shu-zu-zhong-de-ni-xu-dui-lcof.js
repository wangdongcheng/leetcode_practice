// 面试题51. 数组中的逆序对
// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

// 示例 1:

// 输入: [7,5,6,4]
// 输出: 5


// 限制：

// 0 <= 数组长度 <= 50000

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs_TLE = function (nums) { // TLE, too slow
    let fidx = 0;
    let qty = 0;
    nums.forEach((v, i, a) => {
        fidx = i;
        while (true) {
            fidx = nums.findIndex((num, idx) => {
                return num < v && idx > fidx;
            })
            if (fidx === -1) {
                break;
            } else {
                qty++
            }
        }
    })
    return qty;
};

const reversePairs = nums => {
    let qty = 0;
    const mergeSorted = nums => {
        if (nums.length < 2) {
            return nums;
        }
        const mid = Math.floor((nums.length) / 2);
        let left = nums.slice(0, mid);
        let right = nums.slice(mid);
        return merge(mergeSorted(left), mergeSorted(right));
    }
    const merge = (left, right) => {
        let lrlen = left.length + right.length;
        let ret = [];
        for (let i = 0, a = 0, b = 0; i < lrlen; i++) {
            if (left[a] <= right[b] || b === right.length) {
                ret.push(left[a]);
                a++;
            } else if (left[a] > right[b] || a === left.length) {
                ret.push(right[b]);
                qty += (left.length - a); // 若left[a]>right[b]，则left数组中index a之后的剩余的数都一定大于right[b]
                b++;
            }
        }
        return ret;
    }
    mergeSorted(nums);
    return qty;
}

console.log(reversePairs([7, 5, 6, 4]), 5);
console.log(reversePairs([4, 5, 6, 7, 433, 5, 6, 7, 443, 65, 3, 2, 2, 456, 7, 89, 0, 3, 22, 4, 5, 6, 22, 11, 3, 4, 6, 121, 43]), 182);
console.log(reversePairs([]), 0);
const tle = require("../json_test_case/intv_0051_shu-zu-zhong-de-ni-xu-dui-lcof.json");
console.log(reversePairs(tle), 624875572);