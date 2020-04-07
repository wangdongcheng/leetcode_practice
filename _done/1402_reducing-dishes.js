// 1402. Reducing Dishes
// A chef has collected data on the satisfaction level of his n dishes. Chef can cook any dish in 1 unit of time.

// Like-time coefficient of a dish is defined as the time taken to cook that dish including previous dishes multiplied by its satisfaction level  i.e.  time[i]*satisfaction[i]

// Return the maximum sum of Like-time coefficient that the chef can obtain after dishes preparation.

// Dishes can be prepared in any order and the chef can discard some dishes to get this maximum value.

// Example 1:
// Input: satisfaction = [-1,-8,0,5,-9]
// Output: 14
// Explanation: After Removing the second and last dish, the maximum total Like-time coefficient will be equal to (-1*1 + 0*2 + 5*3 = 14). Each dish is prepared in one unit of time.

// Example 2:
// Input: satisfaction = [4,3,2]
// Output: 20
// Explanation: Dishes can be prepared in any order, (2*1 + 3*2 + 4*3 = 20)

// Example 3:
// Input: satisfaction = [-1,-4,-5]
// Output: 0
// Explanation: People don't like the dishes. No dish is prepared.

// Example 4:
// Input: satisfaction = [-2,5,-1,0,3,-3]
// Output: 35

// Constraints:

// n == satisfaction.length
// 1 <= n <= 500
// -10^3 <= satisfaction[i] <= 10^3

/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
    if (satisfaction.findIndex(val => {
        return val >= 0;
    }) == -1) {
        return 0;
    }
    let sum = 0;
    if (satisfaction.findIndex(val => {
        return val < 0
    }) == -1) {
        satisfaction.sort((a, b) => a - b);
        satisfaction.forEach((val, idx) => {
            sum += val * (idx + 1);
        })
        return sum;
    }

    let pstvSum = 0,
        roundSum = 0,
        pos = [],
        neg = [];

    satisfaction.forEach((val, idx) => {
        if (val >= 0) {
            roundSum += val;
            pos.push(val);
        } else if (val < 0) {
            neg.push(val);
        }
    })
    pos.sort((a, b) => a - b);
    pos.forEach((val, idx) => {
        pstvSum += val * (idx + 1);
    })
    sum = pstvSum;
    neg.sort((a, b) => b - a);
    let negRoundSum = 0,
        negSum = 0;

    for (let i = 0; i < neg.length; i++) {
        negRoundSum = 0;
        for (let j = 0; j <= i; j++) {
            negRoundSum += neg[j];
        }
        negSum += negRoundSum;
        sum = Math.max(sum, pstvSum + (i + 1) * roundSum + negSum);
    }

    return sum;
};

console.log(maxSatisfaction([-1, -8, 0, 5, -9]), 14);
console.log(maxSatisfaction([-3, -2, -1, 0, 1, 2, 3]), 28);
console.log(maxSatisfaction([-1, -4, -5]), 0);
console.log(maxSatisfaction([4, 3, 2]), 20);
console.log(maxSatisfaction([-2, 5, -1, 0, 3, -3]), 35);
console.log(maxSatisfaction([0, -1, 2, -3, 4, 5, -25, 6, 9, 33]), 494);
console.log(maxSatisfaction([-1, 2, -3, 4, 5, -25, 6, 9, 33]), 435);
console.log(maxSatisfaction([-188, -61, 719, 123, -920, -801, -24, -764, 703, 564, 704, 573, -673, -691, 328, -858, 977, 980, -119, 739, -823, -527, -544, 332, 191, 33, 919, -671, 165, -303, -235, -718, -913, -403, -67, -297, -977, -90, -61, 128, -982, -997, -463, -104, -29, -195, -133, -904, 160, -109, -992, -210, -360, -367, 49, 753, -292, 23, 917, -522, -563, -171, 83, -29, -730, 518, -917, 84, -72, -170, 807, 583, 894, -770, 646, -570, 373, 609, -29, 500, -536, 106, -800, 501, 901, 132, -873, 237]), 954209);
console.log(maxSatisfaction([-188, -61, 719, 123, -920, -801, -24, -764, 703, 564, 704, 573, -673, -691, 328, -858, 977, 980, -119]), 72236);