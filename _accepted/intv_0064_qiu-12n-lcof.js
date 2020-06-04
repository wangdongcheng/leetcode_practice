// 面试题64. 求1+2+…+n
// 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

// 示例 1：

// 输入: n = 3
// 输出: 6
// 示例 2：

// 输入: n = 9
// 输出: 45


// 限制：
// 1 <= n <= 10000

// tags: 逻辑运算符的短路性质

/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
    // 不允许用for, while => 递归
    // 不允许用if => 逻辑运算符的短路性质

    return n && n + sumNums(n - 1);
};

console.log(sumNums(1), 1);
console.log(sumNums(3), 6);