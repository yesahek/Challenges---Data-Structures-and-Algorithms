// function palindrome(str){
//     let isPalindrom = false;
//     //formated String 
//     const formatedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     //let's split, reverse and join
//     const reversedStr = formatedStr.split('').reverse().join('');
//     //join on String variable 
//     if (formatedStr === reversedStr) {
//         isPalindrom = true;
//     }else{
//         isPalindrom = false;
//     }

// return isPalindrom;
// }

function palindrome(str){
    // Remove all non alphaNumeric char and conver to lower case
const formatedStr = removeNonAlphaNumeric(str.toLowerCase());
    // Reverce String
const reversedStr = reverseStr(formatedStr);

//return final answer whether the formated string is equal to revesed string
return formatedStr === reversedStr;

}

function removeNonAlphaNumeric(str){
//variable to store formated string
let formatedStr = '';
for (let i = 0; i < str.length; i++) {
    if (isAlphaNumeric(str[i])) {
        formatedStr += str[i];
    }
}
return formatedStr;
}

function isAlphaNumeric(char){
    //Get the char code
    const code = char.charCodeAt(0);
    //check the char code is alphaNumric
    return (
        (code >= 48 && code <= 57) || // Numbers 0-9
        (code >= 97 && code <= 122) // Lowercase letters a-z
    );
}

function reverseStr(str){
let reversedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
    reversedStr +=  str[i];    
    }
    return reversedStr;
}
module.exports = palindrome;