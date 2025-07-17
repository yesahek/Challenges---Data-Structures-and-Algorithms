/* Logarithmic Time (O(log n)) */

function findPower (base, exponent) {
    if (exponent === 0) {
        return 1;
    }

    if(exponent % 2 === 0) {
        const halfPower = findPower(base, exponent / 2);
        return halfPower * halfPower;
    } else {
        const halfPower = findPower(base, (exponent - 1) / 2);
        return base * halfPower * halfPower;
    }
}
console.time('Find Power');
console.log(findPower(2, 10)); // 1024
console.timeEnd('Find Power');

console.time('Find Power 2');
console.log(findPower(2, 100)); // 1024
console.timeEnd('Find Power 2');