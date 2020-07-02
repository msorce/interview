/*
 * Given an array of integers and a number, write a function called maxSubarraySum, which
 * finds the maximum sum of a subarray with the length of the number passed to the function.
 * */

function maxSubarraySum(arr, k) {
  // finx initial max sum first k numbers in array
  if (k > arr.length) {
    return null;
  }
  let total = 0;
  for (let i = 0; i < k; i++) {
    total += arr[i];
  }
  let tempSum = total;
  for (let i = k; i < arr.length; i++) {
    tempSum = tempSum - arr[i - k] + arr[i];
    total = Math.max(tempSum, total);
  }
  return total;
}
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
