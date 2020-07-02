// time complexity = O(n^2) quadradic
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      // shift to the right
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
console.log(insertionSort([1, 5, 3, 6, 2, 7]));
