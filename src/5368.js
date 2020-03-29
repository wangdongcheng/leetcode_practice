// 5368. 找出数组中的幸运数

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let m = new Map(),
        ret = -1;

    arr.forEach((val, idx, array) => {
        if (!m.has(val)) {
            m.set(val, 1);
        } else {
            let cnt = m.get(val) + 1;
            m.set(val, cnt);
        }
    })

    m.forEach((val, key) => {
        if (val === key) {
            ret = Math.max(ret, val);
        }
    })

    return ret;
};

console.log(findLucky([2, 2, 3, 4]), 2);
console.log(findLucky([1, 2, 2, 3, 3, 3]), 3);
console.log(findLucky([2, 2, 2, 3, 3]), -1);
console.log(findLucky([5]), -1);
console.log(findLucky([7, 7, 7, 7, 7, 7, 7]), 7);