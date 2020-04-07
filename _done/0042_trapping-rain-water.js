/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let leftH = 0,
        rightH = 0,
        heightCopy = height.slice(0),
        rain = 0;

    for (let i = 1; i < height.length - 1; i++) {
        leftH = 0;
        rightH = 0;
        for (let j = i - 1; j >= 0; j--) {
            if (height[j] > height[i]) leftH = Math.max(leftH, height[j])
        }
        for (let k = i + 1; k < height.length; k++) {
            if (height[k] > height[i]) rightH = Math.max(rightH, height[k]);
        }
        if (leftH > height[i] && rightH > height[i]) height[i] = leftH < rightH ? leftH : rightH;
    }

    for (let i = 0; i < height.length; i++) {
        rain += (height[i] - heightCopy[i]);
    }

    return rain;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 11, 5, 4, 6, 4, 3, 3, 4, 5, 6, 7, 22, 3, 4, 5, 6, 344, 4, 5, 6, 3, 2, 5, 3, 3, 43, 4, 5, 3, 32, 1]), 539);
console.log(trap([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0);