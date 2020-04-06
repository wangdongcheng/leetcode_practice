// 5361. 圆和矩形是否有重叠

/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function (radius, x_center, y_center, x1, y1, x2, y2) {
    if (x_center + radius < x1 || x_center - radius > x2 || y_center + radius < y1 || y_center - radius > y2) {
        return false;
    }
    if (x_center < x1 && y_center > y2 && (x1 - x_center) ** 2 + (y_center - y2) ** 2 > radius ** 2) {
        return false;
    }
    if (x_center > x2 && y_center > y2 && (x_center - x2) ** 2 + (y_center - y2) ** 2 > radius ** 2) {
        return false;
    }
    if (x_center < x1 && y_center < y1 && (x1 - x_center) ** 2 + (y1 - y_center) ** 2 > radius ** 2) {
        return false;
    }
    if (x_center > x2 && y_center < y1 && (x_center - x2) ** 2 + (y1 - y_center) ** 2 > radius ** 2) {
        return false;
    }
    return true;
};

console.log(checkOverlap(1, 0, 0, -1, 0, 0, 1), true);
console.log(checkOverlap(1, 0, 0, 1, -1, 3, 1), true);
console.log(checkOverlap(1, 1, 1, -3, -3, 3, 3), true);
console.log(checkOverlap(1, 1, 1, 1, -3, 2, -1), false);
console.log(checkOverlap(1415, 807, -784, -733, 623, -533, 1005), false);
console.log(checkOverlap(415, 523, 539, 26, 363, 193, 424), true);