function reverseString(str){
    let result = "";
    let index = str.length - 1;
    for (let i = index; i >= 0; i--) {
        result=  result + str[i];
    }
return result;
}
module.exports = reverseString;