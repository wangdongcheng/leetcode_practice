let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
// arr = [1];
const mid = Math.floor((arr.length)/2);
let l = arr.slice(0,mid);
let r = arr.slice(mid);

console.log(l,r);