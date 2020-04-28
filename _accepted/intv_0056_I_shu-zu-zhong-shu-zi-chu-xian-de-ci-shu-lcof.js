// 面试题56 - I. 数组中数字出现的次数
// 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

// 示例 1：

// 输入：nums = [4,1,4,6]
// 输出：[1,6] 或 [6,1]
// 示例 2：

// 输入：nums = [1,2,10,4,1,4,3,3]
// 输出：[2,10] 或 [10,2]


// 限制：
// 2 <= nums <= 10000
// （同 260题 - 只出现一次的数字 III）

// tags: bitwise

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers_set = function (nums) { // 68 ms	39.3 MB
    let m = new Set();

    nums.forEach(n => {
        if (m.has(n)) {
            m.delete(n)
        } else {
            m.add(n);
        }
    })
    return [...m];
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) { // 80 ms	35.8 MB 空间复杂度O(1)
    let xor = 0;
    nums.forEach(n => {
        xor ^= n;
    })
    const mask = xor & (-xor); // 快速得到最末尾的 1 
    let ans = [0, 0];
    nums.forEach(n => {
        if ((n & mask) === 0) { // n & mask外必须要加括号，有优先级！
            ans[0] ^= n;
        } else {
            ans[1] ^= n;
        }
    })
    return ans;
};

console.log(singleNumbers([1, 2, 10, 4, 1, 4, 3, 3]), [2, 10]);