// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr);
//     let min = i;
//     let temp = min;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[min] > arr[j]) {
//         temp = j;
//       }
//     }
//     if (min !== temp) {
//       [arr[min], arr[temp]] = [arr[temp], arr[min]];
//     }
//   }
//   return arr;
// }
/*
 * TIME COMPLEXITY = O(n^2)
 *
 *
 *
 * */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr);
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      console.log("swap");
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }
  return arr;
}
selectionSort([1, 7, 2, 0]);
