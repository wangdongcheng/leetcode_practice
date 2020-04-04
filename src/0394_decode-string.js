// 394. Decode String
// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

// Examples:
// s = "3[a]2[bc]", return "aaabcbc".
// s = "3[a2[c]]", return "accaccacc".
// s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const NUM = "0123456789";
    const ALP = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let st = [],
        i = 0,
        str = "";

    while (i < s.length) {
        const it = s[i];
        if (NUM.includes(it) || ALP.includes(it) || it === "[") {
            st.push(it);
        } else if (it === "]") {
            str = "";
            while (st[st.length - 1] != "[") {
                str = st.pop() + str;
            }
            st.pop();
            let qtyStr = "";
            while (NUM.includes(st[st.length - 1])) {
                qtyStr = st.pop() + qtyStr;
            }
            let qty = parseInt(qtyStr, 10);
            str = str.repeat(qty);
            st.push(str);
        }
        i++;
    }
    str = "";
    st.forEach(val => {
        str += val;
    })
    return str;
};

console.log(decodeString("3[a]2[bc])") === "aaabcbc");
console.log(decodeString("3[a2[c]]") === "accaccacc");
console.log(decodeString("2[abc]3[cd]ef") === "abcabccdcdcdef");
console.log(decodeString("3[a]0[bK]") === "aaa");
console.log(decodeString("3[ZS]55[bK]") === "ZSZSZSbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbKbK");
console.log(decodeString("30[ZhS]100[pbK]") === "ZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSZhSpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbKpbK");