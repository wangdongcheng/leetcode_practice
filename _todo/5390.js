// 5390. 数青蛙

/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
    if (croakOfFrogs.length % 5 != 0) {
        return -1;
    }
    for (let i = 0; i < croakOfFrogs.length; i++) {
        if (!"croak".includes(croakOfFrogs[i])) {
            return -1;
        }
    }
    let qty = 0;
    let copy = croakOfFrogs;
    while (true) {
        let ic = croakOfFrogs.indexOf("c");
        let ir = croakOfFrogs.indexOf("r");
        let io = croakOfFrogs.indexOf("o");
        let ia = croakOfFrogs.indexOf("a");
        let ik = croakOfFrogs.indexOf("k");
        if (croakOfFrogs.length >= 5 && (ic === -1 || ir === -1 || io === -1 || ia === -1 || ik === -1)) {
            return -1;
        } else if (ic < ir && ir < io && io < ia && ia < ik) {
            qty++;
            croakOfFrogs = croakOfFrogs.replace("c", "");
            croakOfFrogs = croakOfFrogs.replace("r", "");
            croakOfFrogs = croakOfFrogs.replace("o", "");
            croakOfFrogs = croakOfFrogs.replace("a", "");
            croakOfFrogs = croakOfFrogs.replace("k", "");
        } else {
            break;
        }
    }
    copy = copy.replace("croak", "");
    while (true) {
        if (copy.includes("croak")) {
            copy = copy.replace("croak", "");
            qty--;
        } else {
            break;
        }
    }
    return qty === 0 ? -1 : qty;
};

console.log(minNumberOfFrogs("croakcroak"), 1);
console.log(minNumberOfFrogs("crcoakroak"), 2);
console.log(minNumberOfFrogs("aoocrrackk"), -1);
console.log(minNumberOfFrogs("ccrcroakorakoak"), 3);
console.log(minNumberOfFrogs("croakcrook"), -1);
console.log(minNumberOfFrogs("crocakcroraoakk"), 2);