// To find the greatest common divisor
const gcd = (a, b) => {
    return (!b) ? a : gcd(b, a % b);
}