function validAnagrams(str1,str2){
    const frqCount1 = str1.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    },{});

    const frqCount2 = str2.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    },{});
    return Object.keys(frqCount1).every((char)=> frqCount1[char] === frqCount2[char]);
}
module.exports = validAnagrams;