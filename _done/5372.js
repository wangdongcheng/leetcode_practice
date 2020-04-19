// 5372. 逐步求和得到正数的最小值

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
    let curr = 0;
    let min = 0;
    nums.forEach(val => {
        curr += val;
        min = Math.min(min, curr);
    })
    return 1 - min;
};

console.log(minStartValue([-3, 2, -3, 4, 2]), 5);
console.log(minStartValue([1, 2]), 1);
console.log(minStartValue([1, -2, -3]), 5);