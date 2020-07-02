function averagePair(arr, avg) {
  // arr is sorted already
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let cur = (arr[left] + arr[right]) / 2;
    if (cur < avg) {
      left++;
    } else if (cur > avg) {
      right--;
    } else if (cur === avg) {
      return true;
    }
  }
  return false;
}
