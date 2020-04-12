// 5380. 数组中的字符串匹配

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    let ans = [];
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            const wi = words[i];
            const wj = words[j];
            if (wi.indexOf(wj) != -1) {
                ans.push(wj);
            } else if (wj.indexOf(wi) != -1) {
                ans.push(wi);
            }
        }
    }
    return [...new Set(ans)];
};

console.log(stringMatching(["blue", "green", "bu"]), []);
console.log(stringMatching(["leetcode", "et", "code"]), ["et", "code"]);
console.log(stringMatching(["mass", "as", "hero", "superhero"]), ["as", "hero"]);
console.log(stringMatching(["leetcoder", "leetcode", "od", "hamlet", "am"]), [["leetcode", "od", "am"]]);