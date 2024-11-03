const isValidIPv4 = require('./valid-ipv4.js');

const result1 = isValidIPv4('123.456.78.90');
const result2 = isValidIPv4('122.164.23.21.2');

console.log(result1, result2);