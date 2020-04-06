// 5362. 构造 K 个回文字符串

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
    if (k > s.length) return false;
    if (k === s.length) return true;
    let m = new Map();
    const len = s.length;
    for (let i = 0; i < len; i++) {
        if (!m.has(s[i])) {
            m.set(s[i], 1);
        } else {
            let qty = m.get(s[i]) + 1;
            m.set(s[i], qty);
        }
    }
    let odd = 0;
    for (val of m.values()) {
        if (val % 2 != 0) {
            odd++;
        }
    }
    if (odd <= k) {
        return true;
    }
    return false;
};

console.log(canConstruct("annabelle", 2), true);
console.log(canConstruct("yzyzyzyzyzyzyzy", 2), true);
console.log(canConstruct("leetcode", 3), false);
console.log(canConstruct("cr", 7), false);
console.log(canConstruct("true", 4), true);