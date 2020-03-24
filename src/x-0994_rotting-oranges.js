/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let oranges = [],
        currPoint = 0,
        prevPoint = 0,
        minutes = 0,
        posMap = new Map(),
        rotted = new Map();

    posMap.set(0, [1, 3]);
    posMap.set(1, [0, 2, 4]);
    posMap.set(2, [1, 5]);
    posMap.set(3, [0, 4, 6]);
    posMap.set(4, [1, 3, 5, 7]);
    posMap.set(5, [2, 4, 8]);
    posMap.set(6, [3, 7]);
    posMap.set(7, [4, 6, 8]);
    posMap.set(8, [5, 7]);

    grid.forEach((line, idx, arr) => {
        line.forEach((val, idx, arr) => {
            oranges.push(val);
            currPoint += val;
        });
    });
    if (!oranges.includes(1)) return 0;

    while (prevPoint != currPoint) {
        prevPoint = currPoint;
        currPoint = 0;
        for (let i = 0; i < 9; i++) {
            if (rotted.has(i)) continue;
            if (oranges[i] === 2) {
                posMap.get(i).forEach((val, idx, arr) => {
                    if (oranges[val] === 1) {
                        rotted.set(val, true);
                        oranges[val] = 2;
                    }
                });
            }
        }
        oranges.forEach((val, idx, arr) => {
            currPoint += val;
        });
        minutes++;
        rotted.clear();
    }

    return oranges.includes(1) ? -1 : minutes - 1;
};

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]), 4);
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]), -1);
console.log(orangesRotting([[0, 2]]), 0);
console.log(orangesRotting([[0]]), 0);
console.log(orangesRotting([[2,0],[1,0]]),1);