// 11. Container With Most Water

// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.
// (see picture in markdown)

// Example:
// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

// tag: 双指针
/**
 * @param {number[]} height
 * @return {number}
 */
var maxAreaForceSearch = function (height) {
    let max = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
        }
    }
    return max;
};

const maxArea = height => {
    let max = 0;
    let i = 0;
    let j = height.length;
    while (i != j - 1) {
        if (height[i] <= height[j]) {
            i++;
        } else {
            j--;
        }
        max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
    }
    return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);