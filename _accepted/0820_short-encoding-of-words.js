// 820. Short Encoding of Words
// Given a list of words, we may encode it by writing a reference string S and a list of indexes A.

// For example, if the list of words is ["time", "me", "bell"], we can write it as S = "time#bell#" and indexes = [0, 2, 5].

// Then for each index, we will recover the word by reading from the reference string from that index until we reach a "#" character.

// What is the length of the shortest reference string S possible that encodes the given words?

// Example:

// Input: words = ["time", "me", "bell"]
// Output: 10
// Explanation: S = "time#bell#" and indexes = [0, 2, 5].

// Note:
// 1 <= words.length <= 2000.
// 1 <= words[i].length <= 7.
// Each word has only lowercase letters.

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
    let totalLen = 0,
        len = words.length;

    words.forEach((val, idx, arr) => {
        totalLen += val.length + 1;
    });

    for (let i = 0; i < len; i++) {
        const strI = words[i];
        const lenI = words[i].length;
        if (strI === "") continue;
        for (let j = i + 1; j < len; j++) {
            const strJ = words[j];
            const lenJ = words[j].length;
            if (strJ === "") continue;
            if (lenI < lenJ) {
                if (strJ.lastIndexOf(strI) === lenJ - lenI) {
                    totalLen -= lenI + 1;
                    break;
                }
            } else if (lenI > lenJ) {
                if (strI.lastIndexOf(strJ) === lenI - lenJ) {
                    totalLen -= lenJ + 1;
                    words[j] = "";
                }
            } else if (lenI === lenJ && strI === strJ) {
                totalLen -= lenI + 1;
                words[j] = "";
            }
        }
    }
    return totalLen;
};

// The solution of double 100%
// 解题思路
// 剔除重复词尾的思路，通过哈希表降低查询的复杂度(空间换时间)。
// 对 words 中的每个元素的词尾做切片并比对，如果词尾出现在 words 中，则删除该元素。
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
    let hashSet = new Set(words);
    for (let item of hashSet) {
        for (let i = 1; i < item.length; i++) {
            // 切片，看看是否词尾在 hashSet 中，切片从1开始，只看每个单词的词尾
            let target = item.slice(i);
            hashSet.has(target) && hashSet.delete(target);
        }
    }
    let result = 0;
    // 根据 hashSet 中剩余元素计算最终长度
    hashSet.forEach(item => result += item.length + 1)
    return result
};

console.log(minimumLengthEncoding(["time", "me", "bell"]), 10);
console.log(minimumLengthEncoding(["bwsdfsdfsfsdfsdfsdf", "bwfeefefewdd", "earsdfsdfsdfth"]), 48);
console.log(minimumLengthEncoding(["dfsdfsdf", "bfewdoo", "earsdfsdfsdfth", "weth", "kdiekdiekdkweth"]), 48);
console.log(minimumLengthEncoding(["time", "time", "time", "time"]), 5);
console.log(minimumLengthEncoding(["a", "a", "a"]), 2);
console.log(minimumLengthEncoding(["time", "atime", "btime"]), 12);