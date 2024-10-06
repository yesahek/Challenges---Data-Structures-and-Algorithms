// function removeDuplicates (arr){
//     let result = [];
// for (let i = 0; i < arr.length; i++) {
//    for (let k = 0; k < arr.length; k++) {
//     if (i == k) {
//         result[k] = arr[k]
//     } else {
//         if (arr[i] != arr[k]) {
//             result[k] = arr[k]
//         } 
//     }
//    }
    
// }
// return result;
// }
// function removeDuplicates(arr){
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//       if (!result.includes(arr[i])) {
//         result.push(arr[i]);
//       }
        
//     }
//     return result;
// }

function removeDuplicates(arr){
    return Array.from(new Set(arr));
}

module.exports = removeDuplicates;