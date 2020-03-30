// 1395. Count Number of Teams

// There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

// You have to form a team of 3 soldiers amongst them under the following rules:

// Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
// A team is valid if:  (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
// Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

// Example 1:
// Input: rating = [2,5,3,4,1]
// Output: 3
// Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1). 

// Example 2:
// Input: rating = [2,1,3]
// Output: 0
// Explanation: We can't form any team given the conditions.

// Example 3:
// Input: rating = [1,2,3,4]
// Output: 4
 
// Constraints:
// n == rating.length
// 1 <= n <= 200
// 1 <= rating[i] <= 10^5

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