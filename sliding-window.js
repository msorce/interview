function maxSubarraySum(arr, k) {
  // set these two variables to hold a dynamic
  // value and the highest value

  let maxSum = 0;
  let tempSum = 0;

  // unable to find k subArray
  if (arr.length < k) {
    return null;
  }
  // sum the first k numbers to get initial maxSum
  // get the max sum
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  // temp sum is set to the first k number sum
  // need to initialize that temp to something
  tempSum = maxSum;
  // k is going to be the index plus one remember
  for (let i = k; i < arr.length; i++) {
    // why is this where the magic happens?
    // temp sum is the current window
    //
    // i - k  is the current index minus the k number max length of subArray
    // its position relative to the tempSum =
    console.log(arr[i - k]);
    // i is just the current index
    console.log(arr[i]);

    tempSum = tempSum - arr[i - k] + arr[i];

    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

const a = [1, 2, 3, 4, 5, 6, 7];
num = 2;

console.log(maxSubarraySum(a, num));
