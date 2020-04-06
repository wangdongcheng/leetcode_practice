// 5363. 做菜顺序

/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
    if (satisfaction.findIndex(val => {
        return val >= 0
    }) == -1) {
        return 0;
    }
    if (satisfaction.findIndex(val => {
        return val < 0
    }) == -1) {
        let sum = 0;
        satisfaction.sort();
        satisfaction.forEach((val, idx) => {
            sum += val * (idx + 1);
        })
        return sum;
    }
    let pstv = 0,
        arr = [],
        neg = [];

    satisfaction.forEach(val => {
        if (val >= 0) {
            pstv += val;
            arr.push(val);
        }
    })

    satisfaction.forEach(val => {
        if (val < 0 && Math.abs(val) < pstv) {
            neg.push(val);
        }
    })
    neg.sort((a, b) => b - a);
    neg = neg.concat(arr);
    let sum = 0;
    neg.forEach((val, idx) => {
        sum += val * (idx + 1);
    })
    return sum;
};

console.log(maxSatisfaction([-1, -8, 0, 5, -9]), 14);
console.log(maxSatisfaction([-1, -4, -5]), 0);
console.log(maxSatisfaction([4, 3, 2]), 20);