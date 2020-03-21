// see question description and detais in 5349_cinema-seat-allocation.md

const seatRevsd = (arr, a, b) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === a && arr[i][1] === b) return true
    }
    return false;
}

/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
    let seats = [],
        line = [];
    for (let i = 0; i < n; i++) {
        line = [];
        for (let j = 0; j < 10; j++) {
            if (!seatRevsd(reservedSeats, i + 1, j + 1)) {
                line.push("OK");
            }
        }
        seats.push(line);
    }
    console.log(seats);
};


maxNumberOfFamilies(3, [[1, 2], [1, 3], [1, 8], [2, 6], [3, 1], [3, 10]]);
// 输入：n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]
// 输出：4