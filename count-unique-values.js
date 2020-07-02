/**
 * Implement a functin called countUniqueValues,
 * which accepts a sorted arrat and counts the unique values in the array
 * There can be negative numbers in the array , but it will always be sorted.
 */

function countUniqueValues(arr) {
  if (!arr.length) {
    return 0;
  }

  let i = 0;
  let j = 1;

  while (j < arr.length) {
    // if the j pointer is different
    // move the i increment i pointer and set the element equal to the j element
    if (arr[i] !== arr[j]) {
      arr[++i] = arr[j];
    }
    j++;
    // when we reach the end return the i index + 1
  }
  return i + 1;
}

console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([1])); // 1
console.log(countUniqueValues([1, 2, 2, 3, 3])); // 3
