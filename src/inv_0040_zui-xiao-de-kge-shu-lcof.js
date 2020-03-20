// 面试题40. 最小的k个数
// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

 

// 示例 1：

// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]
// 示例 2：

// 输入：arr = [0,1,2,1], k = 1
// 输出：[0]
 

// 限制：

// 0 <= k <= arr.length <= 10000
// 0 <= arr[i] <= 10000

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    // 1. shameful but feasible way
    // 执行用时：176 ms
    // 内存消耗：40.6 MB
    if (false) {
        let ret = [];
        arr.sort(function (a, b) { return a - b; });
        for (let i = 0; i < k; i++) {
            ret.push(arr[i]);
        }
        return ret;
    }

    // 2. OK, this optimizatoin even much slower
    // 执行用时 :9288 ms, 在所有 JavaScript 提交中击败了5.15%的用户
    // 内存消耗 :43.6 MB, 在所有 JavaScript 提交中击败了100.00%的用户
    let kArr = [];

    const intoK = (val, idx, arr) => {
        if (kArr.length === k && val <= kArr[0]) {
            kArr.shift();
            kArr.push(val);
            kArr.sort(function (a, b) { return b - a; });
        } else if (kArr.length < k) {
            kArr.push(val)
            if (kArr.length === k) kArr.sort(function (a, b) { return b - a; });
        }
    }

    arr.forEach(intoK);
    return kArr;
};

console.log(getLeastNumbers([0, 0, 1, 2, 4, 2, 2, 3, 1, 4], 8), [0, 0, 1, 1, 2, 2, 2, 3]);