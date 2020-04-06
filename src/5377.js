// 5377. 将二进制表示减到 1 的步骤数

/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
    if (s === "1") return 0;
    let step = 0,
        arr = s.split("");

    while (!(arr.length === 1 && arr[0] == "1")) {
        if (arr[arr.length - 1] === "0") { // even
            arr = arr.slice(0, arr.length - 1);
        } else {                         // odd
            for (let i = arr.length - 1; i >= 0; i--) {
                if (arr[i] === "1") {
                    arr[i] = "0";
                } else {
                    arr[i] = "1";
                    break;
                }
            }
            if (arr[0] === "0") {
                arr.unshift("1");
            }
        }
        step++;
    }
    return step;
};


console.log(numSteps("1101"), 6);
console.log(numSteps("10"), 1);
console.log(numSteps("1"), 0);
console.log(numSteps("1111011110000011100000110001011011110010111001010111110001"), 85);