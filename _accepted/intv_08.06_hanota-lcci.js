// 面试题 08.06. Hanota LCCI
// In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of different sizes which can slide onto any tower. The puzzle starts with disks sorted in ascending order of size from top to bottom (i.e., each disk sits on top of an even larger one). You have the following constraints:

// (1) Only one disk can be moved at a time.
// (2) A disk is slid off the top of one tower onto another tower.
// (3) A disk cannot be placed on top of a smaller disk.

// Write a program to move the disks from the first tower to the last using stacks.

// Example1:

//  Input: A = [2, 1, 0], B = [], C = []
//  Output: C = [2, 1, 0]
// Example2:

//  Input: A = [1, 0], B = [], C = []
//  Output: C = [1, 0]
// Note:

// A.length <= 14

// tags: need_to_understand_more
// ref: https://www.zhihu.com/question/24385418 (如何理解汉诺塔的递归？)

const move = (n, from, buffer, to) => { // 移动n层汉诺塔，不是起始杆也不是目标杆的那根杆，自然成为中转杆(buffer)
    if (n === 1) {
        to.push(from.pop());
    } else {
        move(n - 1, from, to, buffer);  // 将n-1块从起始杆移动到中转杆(buffer),
        move(1, from, buffer, to);      // 将从上至下第n块，即最大一块，移动到目标杆
        move(n - 1, buffer, from, to);  // 将n-1块从中转杆移动到目标杆
    }
}

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function (A, B, C) {
    move(A.length, A, B, C);
};

console.log(hanota([13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [], []));