// 5381. 查询带键的排列

/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
    let arrP = [];
    let ans = [];
    for (let i = 1; i <= m; i++) {
        arrP.push(i);
    }

    for (let i = 0; i < queries.length; i++) {
        let idx = arrP.indexOf(queries[i]);
        ans.push(idx);
        arrP.splice(idx, 1);
        arrP.unshift(queries[i]);
    }
    return ans;
};

console.log(processQueries([4, 1, 2, 2], 4), [3, 1, 2, 0]);
console.log(processQueries([3, 1, 2, 1], 5), [2, 1, 2, 1]);
console.log(processQueries([7, 5, 5, 8, 3], 8), [6, 5, 0, 7, 5]);