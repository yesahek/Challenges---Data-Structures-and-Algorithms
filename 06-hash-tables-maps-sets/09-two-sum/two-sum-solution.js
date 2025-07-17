function twoSum(nums, target){
const numsSet = new Set();
for (let i = 0; i < nums.length; i++){
    const complement = target - nums[i];

    if (numsSet.has(complement)){
        return [nums.indexOf(complement), i];
    }
    numsSet.add(nums[i]);

    // for (let j = 0; j< nums.length; j++){
    //     if (i === j) continue; // Skip the same index
    //     if (complement === nums[j]){
    //         return [i , j];
    //     }
    // }
}
}
module.exports = twoSum;