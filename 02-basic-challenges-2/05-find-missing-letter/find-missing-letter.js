// function findMissingLetter(arr){
//     const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let startIndex = alphabet.indexOf(arr[0]);
//     let result = [];   
//     for (let i = 0; i < arr.length; i++) {
//         //console.log(`${arr[i]} ${alphabet[startIndex + i]} `);
//         if (arr[i] != alphabet[startIndex + i]) {
//           return alphabet[startIndex + i];
//             // result.push(alphabet[startIndex + i]);
//             // startIndex++;
//         }
        
//     }
//     return '';
   
// }

function findMissingLetter (arr){
    let start = arr[0].charCodeAt(0);

    for (let i = 0; i < arr.length; i++) {
      let current = arr[i].charCodeAt(0);
      
      if(current - start > 1){
        return String.fromCharCode(start + 1);
      }
      start = current;
        
    }
    return '';
}

module.exports = findMissingLetter;