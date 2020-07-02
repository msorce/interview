function flatten(arr) {
  let flatArr = [];
  function helper(a) {
    a.forEach((e) => {
      if (Array.isArray(e)) {
        helper(e);
      } else {
        flatArr.push(e);
      }
    });
  }
  helper(arr);
  return flatArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
