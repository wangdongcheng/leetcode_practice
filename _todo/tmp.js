let s = new Set();
s.add([2, 3]);
s.add([1, 2]);
s.add([3, 4]);
s.add([4, 5]);

console.log(s);
const delFromSet = (s, arr) => {
    s.forEach((val, idx, thisSet) => {
        if (val[0] === arr[0] && val[1] === arr[1]) {
            thisSet.delete(val);
        }
    })
}

let arr = [
    {
        char: "a",
        qty: 3
    }, {
        char: "b",
        qty: 1
    }, {
        char: "c",
        qty: 5
    }
];
let str = "";
arr.sort((objA, objB) => objB.qty - objA.qty);
str += arr[0].char;
arr[0].qty  = 99;
console.log(str,arr);

str = "abcdef";
let i = 2;
str = str.substr(0,3) + "z" + str.substr(3,6);
console.log(str);