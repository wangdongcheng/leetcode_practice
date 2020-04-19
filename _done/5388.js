// 5388. 重新格式化字符串

/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
    const num = "0123456789";
    const apl = "abcdefghijklmnopqrstuvwxyz";
    let arrN = [];
    let arrA = [];
    for (let i = 0; i < s.length; i++) {
        if (num.indexOf(s[i]) != -1) {
            arrN.push(s[i]);
        } else if (apl.indexOf(s[i] != -1)) {
            arrA.push(s[i]);
        }
    }
    let ret = "";
    if (Math.abs(arrN.length - arrA.length) > 1) {
        return "";
    } else if (arrN.length >= arrA.length) {
        arrN.forEach((char, idx) => {
            ret += char;
            if (idx < arrA.length) {
                ret += arrA[idx];
            }
        })
    } else if (arrN.length < arrA.length) {
        arrA.forEach((char, idx) => {
            ret += char;
            if (idx < arrN.length) {
                ret += arrN[idx];
            }
        })
    }
    return ret;
};

console.log(reformat("a0b1c2"), "0a1b2c");
console.log(reformat("covid2019"), "c2o0v1i9d");