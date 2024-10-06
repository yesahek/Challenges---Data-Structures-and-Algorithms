// function firstNonRepeating(str){
//     for (let i = 0; i < str.length; i+=2) {
//         if (str[i].charCodeAt(0) !== str[i+1].charCodeAt(0)) 
//             return str[i];
//     }
//     return null;
// }

// function firstNonRepeating(str){
//     const charCount = {};
//     for (char of str){
//         charCount[char] = (charCount [char] || 0) + 1;
//         //console.log(charCount); 
//     }

//     for(const char of str){
//         if (charCount[char]===1) {
//             return char;
//         }
//     }
//     return null;
// }

function firstNonRepeating(str){
    const charCount = new Map();
    for (const char of str){
        charCount.set(char, (charCount.get(char)|| 0)+1);
    }

    for(const char of str){
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    return null;
}

module.exports = firstNonRepeating;