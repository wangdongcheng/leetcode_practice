// 5369. 统计作战单位数

/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
    let ret = 0,
        len = rating.length;

    for (let i = 0; i <= len - 3; i++) {
        for (let j = i + 1; j <= len - 2; j++) {
            for (let k = j + 1; k <= len - 1; k++) {
                if (rating[i] < rating[j] && rating[j] < rating[k]) {
                    ret++;
                }
            }
        }
    }
    for (let i = 0; i <= len - 3; i++) {
        for (let j = i + 1; j <= len - 2; j++) {
            for (let k = j + 1; k <= len - 1; k++) {
                if (rating[i] > rating[j] && rating[j] > rating[k]) {
                    ret++;
                }
            }
        }
    }
    return ret;
};

console.log(numTeams([2, 5, 3, 4, 1]), 3);
console.log(numTeams([2, 1, 3]), 0);
console.log(numTeams([1, 2, 3, 4]), 4);