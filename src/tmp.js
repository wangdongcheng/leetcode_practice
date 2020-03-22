const andBit = a => {
    return a & 1;
}

const moveBitLeft = a => {
    return a << 1;
}

console.log(andBit(8));
console.log(andBit(5));
console.log(moveBitLeft(moveBitLeft(1)));
console.log(33 << 1 << 1 << 1);