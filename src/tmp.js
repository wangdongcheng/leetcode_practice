const ins = a => {
    a.forEach((val,idx,arr) => {
        arr.unshift(val);
    });
    return a;
}

console.log(ins([1,2,3,4]));