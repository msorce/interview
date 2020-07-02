//function pivot(arr, start = 0, end = arr.length - 1) {
//  let pivot = arr[start];
//  let swapIdx = start;

//  function swap(arr, a, b) {
//    [arr[a], arr[b]] = [arr[b], arr[a]];
//  }

//  for (let i = start + 1; i <= end; i++) {
//    if (pivot > arr[i]) {
//      swapIdx++;
//      swap(arr, i, swapIdx);
//    }
//  }
//  swap(arr, start, swapIdx);
//  return swapIdx;
//}

//function quicksort(arr, left = 0, right = arr.length - 1) {
//  if (left < right) {
//    let pivotIndex = pivot(arr, left, right);
//    //left
//    quicksort(arr, left, pivotIndex - 1);
//    // right
//    quicksort(arr, pivotIndex + 1, right);
//  }
//  return arr;
//}
function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;

  function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }

  swap(arr, start, swapIdx);

  return swapIdx;
}

function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quicksort(arr, left, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quicksort([4, 8, 2, 1, 5, 7, 6, 3])); // 3
