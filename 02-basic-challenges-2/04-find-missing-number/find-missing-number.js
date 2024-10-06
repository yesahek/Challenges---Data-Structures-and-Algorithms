function findMissingNumber(numArr){
    if (numArr.length === 0 ) return 1;

    let n = numArr.length + 1;
    let expected = (n * (n + 1) / 2);
    let actual = 0;

    for (let i = 0; i < numArr.length; i++) {
        actual += numArr[i];        
    }

    return  expected -actual;
}
module.exports = findMissingNumber;