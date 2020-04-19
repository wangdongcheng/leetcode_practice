// 5374. 长度为 n 的开心字符串中字典序第 k 小的字符串

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
    let i = 2;
    let prev = ["a", "b", "c"];
    let curr = ["a", "b", "c"];
    while (i <= n) {
        curr = [];
        for (let i = 0; i < prev.length; i++) {
            if (prev[i].endsWith("a")) {
                curr.push(prev[i] + "b");
                curr.push(prev[i] + "c");
            } else if (prev[i].endsWith("b")) {
                curr.push(prev[i] + "a");
                curr.push(prev[i] + "c");
            } else if (prev[i].endsWith("c")) {
                curr.push(prev[i] + "a");
                curr.push(prev[i] + "b");
            }
        }
        prev = curr.slice(0);
        i++;
    }
    return k <= curr.length ? curr[k - 1] : "";
};

console.log(getHappyString(1, 3) === "c");
console.log(getHappyString(1, 4) === "");
console.log(getHappyString(3, 9) === "cab");
console.log(getHappyString(2, 7) === "");
console.log(getHappyString(10, 100) === "abacbabacb");