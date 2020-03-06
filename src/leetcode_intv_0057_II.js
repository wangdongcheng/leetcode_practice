// 面试题57 - II. 和为s的连续正数序列 LCOF

// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

// 示例 1：

// 输入：target = 9
// 输出：[[2,3,4],[4,5]]
// 示例 2：

// 输入：target = 15
// 输出：[[1,2,3,4,5],[4,5,6],[7,8]]
//  

// 限制：

// 1 <= target <= 10^5

/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    if (target === 0 || target === 1 || target === 2) {
        return new Array();
    }

    let seq = new Array(),
        sum = 0,
        row = 0,
        i = 1;
    j = 1;

    seq[row] = new Array();
    while (j <= target / 2) {
        sum = 0
        i = j;
        while (1 === 1) {
            sum += i;
            seq[row].push(i);
            if (sum === target) {
                row++;
                break;
            } else if (sum > target) {
                break;
            }
            i++;
        }
        j++;
        seq[row] = new Array();
    }
    if (seq[row].length === 0){
        seq.splice(row,1);
    }
    return seq;
};

console.log(findContinuousSequence(69));