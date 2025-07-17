const maxSubarraySum = require('./max-subarray-linear.js');

test ('Finding maximum subarray sum using O(n^2) solution', () => {
    const arr1 = [2, 5, 3 , 1, 11, 7, 6, 4];
    const k1 = 3;
    expect(maxSubarraySum(arr1, k1)).toBe(24); // The maximum sum of any subarray of length 3 is 24 (11 + 7 + 6)

    const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4];
    const k2 = 4;
    expect(maxSubarraySum(arr2, k2)).toBe(-11); // The maximum sum of any subarray of length 4 is -10 (-2 + -5 + -3 + -1)
});