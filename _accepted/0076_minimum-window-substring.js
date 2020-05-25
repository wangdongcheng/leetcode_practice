// 76. Minimum Window Substring
// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// Example:

// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
// Note:

// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

// tags: 滑动窗口; sliding window; use [] to access elements of object

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (!s) return "";
    let cnt = {}; // counts of each char of T
    let type = 0;
    for (let i = 0; i < t.length; i++) {
        const it = t[i];
        if (cnt[it]) {
            cnt[it]++;
        } else {
            cnt[it] = 1;
            type++;
        }
    }
    let st = 0; // start pointer
    let en = 0; // end pointer
    let len = Number.MAX_SAFE_INTEGER;
    let ret = [];

    while (en < s.length) {
        const ite = s[en];
        if (t.includes(s[en])) {
            cnt[ite]--;
            if (cnt[ite] === 0) {
                type--;
            }
        }
        if (type === 0) { // find workable substring
            if (en - st + 1 < len) {
                ret = [st, en];
                len = en - st + 1;
            }
            while (st < en) {
                const its = s[st];
                if (t.includes(its)) {
                    cnt[its]++
                    if (cnt[its] > 0) { // not match
                        type++;
                    }
                } else {
                    if (ret[0] === st) {
                        st++;
                        ret[0] = st;
                        len--;
                        continue;
                    }
                }
                if (type > 0) {
                    if (en - st + 1 < len) {
                        ret = [st, en];
                        len = en - st + 1;
                    }
                    st++;
                    break;
                }
                st++;
            }
        }
        en++;
    }
    return s.substring(ret[0], ret[1] + 1);
};

console.log(minWindow("ADOBECODEBANC", "ABC") === "BANC");
console.log(minWindow("ABCDEEFGDEFETGDSDEFT", "AEF") === "ABCDEEF");
console.log(minWindow("a", "a") === "a");
console.log(minWindow("aa", "a") === "a");
console.log(minWindow("a", "aa") === "");
console.log(minWindow("ab", "b") === "b");
console.log(minWindow("aBaABbBBB", "A") === "A");