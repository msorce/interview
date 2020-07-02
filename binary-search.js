function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let cur = arr[mid];
    if (num < cur) {
      right = mid - 1;
    } else if (num > cur) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return false;
}

const arr = [1, 3, 4, 5, 8, 9, 11];
console.log(binarySearch(arr, 90));
