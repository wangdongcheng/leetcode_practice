// 5360. 统计最大组的数目

/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {

    const nToArrSum = n => {
        const str = n.toString();
        let arr = str.split(""),
            sum = 0;
        arr.forEach(val => {
            val = parseInt(val, 10);
            sum += val;
        })
        return sum;
    }
    let sumArr = new Int32Array(10000);
    for (let i = 1; i <= n; i++) {
        if (i >= 10) {
            sumArr[nToArrSum(i)]++;
        } else {
            sumArr[i]++;
        }
    }
    sumArr.sort((a, b) => b - a);
    let qty = 0;
    let i = 0;
    while (sumArr[i] === sumArr[0]) {
        qty++
        i++;
    }
    return qty;
};

console.log(countLargestGroup(13), 4);
console.log(countLargestGroup(15), 6);
console.log(countLargestGroup(24), 5);
console.log(countLargestGroup(2), 2);