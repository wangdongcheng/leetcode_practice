// 22. Generate Parentheses:
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

var balance = function (arr) {
    var bal = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            bal++;
        } else {
            bal--;
        }
    }
    return bal;
}

var getPairs = function (n, m) { // n = target n pairs, m = current round

    let arr = new Array();
    if (n < m) {
        return;
    } else if (n === 1) {
        return ['(', ')'];
    } else if (m === 1) {
        let init = ['('];
        arr.push(init);
        return arr;
    }

    let prv = getPairs(n, m - 1);
    for (let i = 0; i < prv.length; i++) {
        let pair = prv[i].slice(0);
        if (balance(pair) > 0 && balance(pair) < n / 2) {
            let newPairL = pair.slice(0);
            newPairL.push('(');
            arr.push(newPairL);
            let newPairR = pair.slice(0);
            newPairR.push(')');
            arr.push(newPairR);
        } else if (balance(pair) === 0) {
            let newPairL = pair.slice(0);
            newPairL.push('(');
            arr.push(newPairL);
        } else if (balance(pair) === n / 2) {
            let newPairR = pair.slice(0);
            newPairR.push(')');
            arr.push(newPairR);
        }
    }

    return arr;
}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let arrPairs = new Array();
    let result = new Array();
    arrPairs = getPairs(2 * n, 2 * n);
    for (let i = 0; i < arrPairs.length; i++) {
        let pair = new Array();
        pair = arrPairs[i].slice(0);
        if (balance(pair) === 0) {
            let pairStr = pair.join('');
            result.push(pairStr);
        }
    }
    return result;
};