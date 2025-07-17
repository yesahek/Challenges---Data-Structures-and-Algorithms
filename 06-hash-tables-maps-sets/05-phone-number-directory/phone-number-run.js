const phoneNumberDirectory = require('./phone-number-directory');

const result = phoneNumberDirectory([
  'Alice:123-456-7890',
  'Bob:987-654-3210',
]);
console.log(result.get('Alice')); // Output: 123-456-7890