function titleCase(str){
    let res = str.toLowerCase().split(' ');
    for (let i = 0; i < res.length; i++) {
        res[i] = res[i][0].toUpperCase() + res[i].slice(1);
    }
    return res.join(' ');
}
module.exports = titleCase;