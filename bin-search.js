function binarySearch(arr, val) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] < val) {
      l = mid + 1;
    } else if (arr[mid] > val) {
      r = mid - 1;
    } else if (arr[mid] === val) {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 8));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 0));
