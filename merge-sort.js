function merge(a, b) {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      res.push(a[i]);
      i++;
    } else {
      res.push(b[j]);
      j++;
    }
  }
  while (i < a.length) {
    res.push(a[i]);
    i++;
  }
  while (j < b.length) {
    res.push(b[j]);
    j++;
  }
  return res;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // split the array
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([1, 4, 2, 8, 9]));
