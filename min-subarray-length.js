function minSubArrayLen(arr, num) {
  // setup window pointers both start at 0 index;
  let start = 0;
  let end = 0;
  let len = Infinity;
  let total = 0;
  while (start < arr.length) {
    // if the current total doesnt add up to the target num
    // and the end pointer is less than the arrays length
    if (total < num && end < arr.length) {
      // add the end pointer value to the sum
      total += arr[end];
      // move the end pointer to the right
      end++;
    }
    // if the current window sum is at least the target value
    else if (total >= num) {
      len = Math.min(len, end - start);
      total -= arr[start];
      // we can move the left pointer up
      start++;
    } else {
      break;
    }
  }
  return len === Infinity ? 0 : len;
}
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
