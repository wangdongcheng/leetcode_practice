let m = new Map();
m.set(1, "one");
m.set(99, "ninty-nine");
m.set(5, "five");
m.set(23, "twenty-three");

console.log(m);

let arr = Array.from(m.keys());
console.log(arr);
arr.sort();
for ([k, v] of m) {
    if (k === 5) {
        v = 'not five';
        break;
    }
    console.log(k + "=-=" + v);
}

 arr = [1,11,2];
console.log(arr.sort());
