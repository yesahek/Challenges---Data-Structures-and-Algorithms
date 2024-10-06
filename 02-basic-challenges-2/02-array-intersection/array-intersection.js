// function arrayIntersection(arr1,arr2){
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i])) {
//             result.push(arr1[i]);
//         }
//     }
// return result;
// }

function arrayIntersection(arr1,arr2){
    const set1 = new Set(arr1);
    const intersectionArr = [];

    for(let num of arr2){
        if (set1.has(num)) {
            intersectionArr.push(num);
        }
    }
    return intersectionArr;
}

module.exports = arrayIntersection;