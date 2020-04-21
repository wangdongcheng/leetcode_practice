// 56. Merge Intervals
// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Example 2:
// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

const mer = (arr1, arr2) => {
    if (arr1[1] < arr2[0] || arr2[1] < arr1[0]) {
        return [];
    } else {
        return [Math.min(arr1[0], arr2[0]), Math.max(arr1[1], arr2[1])];
    }
}

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length <= 1) {
        return intervals;
    } else {
        let i = 0;
        let j = 0;
        while (i < intervals.length - 1) {
            j = i + 1;
            while (j < intervals.length) {
                let m = mer(intervals[i], intervals[j]);
                if (m.length != 0) {
                    intervals[i] = m;
                    intervals.splice(j, 1);
                    i = -1;  // make the i = 0 again in next loop
                    break;
                } else {
                    j++;
                }
            }
            i++
        }
    }
    return intervals;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]), [[1, 6], [8, 10], [15, 18]]);
console.log(merge([[1, 4], [4, 5]]), [[1, 5]]);
console.log(merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]), [[1, 10]]);