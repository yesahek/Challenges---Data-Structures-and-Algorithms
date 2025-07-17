function longestConsecutive (arr){
    const numSet = new Set(arr);
    let longestSequence = 0;

    for (const num of numSet){
        if (!numSet.has(num - 1)){
            let currentNum = num;
            let curentSequence = 1;

            while (numSet.has(currentNum + 1)){
                currentNum++;
                curentSequence++;
            }
            longestSequence = Math.max(longestSequence, curentSequence)
        }
    }
    return longestSequence;

}
module.exports = longestConsecutive;