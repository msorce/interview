function maxSubarray(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  // get the starting max sum
  // by looping through first count of num
  for (let i; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // really got to break this one down here
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log([1, 1, 1, 1, 1, 1], 2);
