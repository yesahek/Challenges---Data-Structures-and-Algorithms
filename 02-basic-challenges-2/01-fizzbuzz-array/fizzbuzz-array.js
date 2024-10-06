function fizzBuzzArray(num){
    let arr = [];
    for (let i = 1; i <= num; i++) {
        let temp = '';
       if (i % 3 == 0) {
        temp = 'Fizz';
        if (i%5 == 0) {
            temp += 'Buzz';
        }
        arr.push(temp);
       }else if(i%5 == 0)
       {
        arr.push('Buzz');
       } else 
       arr.push(i)
        
    }
    return arr;
}
module.exports = fizzBuzzArray;