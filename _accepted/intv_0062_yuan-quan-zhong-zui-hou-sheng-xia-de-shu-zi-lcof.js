// 面试题62. 圆圈中最后剩下的数字
// 0,1,,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字。

// 例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

// 示例 1：

// 输入: n = 5, m = 3
// 输出: 3
// 示例 2：

// 输入: n = 10, m = 17
// 输出: 2


// 限制：
// 1 <= n <= 10^5
// 1 <= m <= 10^6

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
    if (m === 1) return n - 1;

    let arr = [],
        lastIdx = 0,
        nextIdx = -1,
        last = 0;

    for (let i = 0; i < n; i++) {
        if ((i + 1) % m === 0) {
            last = i;
            continue;
        }
        arr.push(i);
    }
    lastIdx = arr.indexOf(last + 1);
    if (last === 0) lastIdx = 0;
    if (lastIdx === -1) lastIdx = 0;

    while (arr.length != 1) {
        let len = arr.length;
        nextIdx = (lastIdx + m - 1) % len;
        lastIdx = nextIdx;
        arr.splice(nextIdx, 1);
    }
    return arr[0];
};

console.log(lastRemaining(5, 1), 4);
console.log(lastRemaining(4, 4), 1);
console.log(lastRemaining(99, 99), 88);
console.log(lastRemaining(100, 99), 87);
console.log(lastRemaining(22, 22), 6)
console.log(lastRemaining(5, 3), 3);
console.log(lastRemaining(7, 4), 1);
console.log(lastRemaining(4, 6), 2);
console.log(lastRemaining(10, 17), 2);
console.log(lastRemaining(1000, 999), 333);


// the fastest js sample, 60ms.
// It has been proven by math that:
// 约瑟夫问题（有时也称为约瑟夫斯置换），是一个出现在计算机科学和数学中的问题。在计算机编程的算法中，类似问题又称为约瑟夫环。
// f(n,k) = (f(n-1,k) + k) mod n, f(1,k) = 0
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */

// f(n) = f(n - 1) + m  %n
var lastRemaining = function(n, m) {
    let res = 0; // f(1) = 0;
    for(let i = 2; i <= n; i++){
        res = (res + m) % i;
    }
    return res;
};