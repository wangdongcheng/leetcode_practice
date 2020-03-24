// 119. Pascal's Triangle II
// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

// Note that the row index starts from 0.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:
// Input: 3
// Output: [1,3,3,1]

// Follow up:
// Could you optimize your algorithm to use only O(k) extra space?

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1,1];

    let prevRow = getRow(rowIndex - 1),
        curr = [];

    curr.push(1);
    prevRow.forEach((val, idx, arr) => {
        if (idx > 0) curr.push(val + arr[idx - 1]);
    });
    curr.push(1);
    
    return curr;
};

console.log(getRow(11));