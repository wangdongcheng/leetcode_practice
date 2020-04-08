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
delFromSet(s, [2, 3]);
console.log(s);