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
  console.log(res);
  return res;
}
merge([1, 5, 9], [2, 6, 8, 9, 10, 11, 13, 33, 66, 77, 99]);
