// see question description and detais in 5349_cinema-seat-allocation.md

// const seatRevsd = (arr, a, b) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i][0] === a + 1 && arr[i][1] === b + 1) return true
//     }
//     return false;
// }

/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
    let familyNum = 0,
        seat = [],
        resvMap = new Map();

    reservedSeats.forEach((val, idx, arr) => {
        let col = [];
        if (!resvMap.has(val[0] - 1)) {
            col.push(val[1] - 1);
        } else {
            col = resvMap.get(val[0] - 1);
            col.push(val[1] - 1);
        };
        resvMap.set(val[0] - 1, col);
    });

    resvMap.forEach((val, key, map) => {
        let row = [];

        for (let i = 0; i < 10; i++) {
            if (val.indexOf(i) === -1) row.push(1);
            else row.push(0);
        }
        familyNum += Math.max((row[1] & row[2] & row[3] & row[4]) + (row[5] & row[6] & row[7] & row[8]), (row[3] & row[4] & row[5] & row[6]));
    });

    familyNum += (n - resvMap.size) * 2;

    return familyNum;
};


console.log(maxNumberOfFamilies(3, [[1, 2], [1, 3], [1, 8], [2, 6], [3, 1], [3, 10]]), 4);
console.log(maxNumberOfFamilies(2, [[2, 1], [1, 8], [2, 6]]), 2);
console.log(maxNumberOfFamilies(4, [[4, 3], [1, 4], [4, 6], [1, 7]]), 4);
console.log(maxNumberOfFamilies(10, []), 20);
console.log(maxNumberOfFamilies(2, [[1, 6], [1, 8], [1, 3], [2, 3], [1, 10], [1, 2], [1, 5], [2, 2], [2, 4], [2, 10], [1, 7], [2, 5]]), 1);
const long = require("../json_test_case/1386_cinema-seat-allocation.json");
console.log(maxNumberOfFamilies(1000000000, long), 1999994439);