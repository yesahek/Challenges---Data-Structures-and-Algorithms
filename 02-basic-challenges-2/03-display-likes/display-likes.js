function displayLikes(namesArr){
    const length = namesArr.length;

    if (length===0) {
        return 'no one likes this';
    } else if (length === 1){
        return `${namesArr[0]} likes this`;
    } else if (length === 2){
        return `${namesArr[0]} and ${namesArr[1]} like this`;
    } else if (length === 3){
        return `${namesArr[0]}, ${namesArr[1]} and ${namesArr[2]} like this`;
    } else {
        return `${namesArr[0]}, ${namesArr[1]} and ${namesArr.length - 2} others like this`;
    }
   
}
module.exports = displayLikes;