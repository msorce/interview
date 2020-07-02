function sumZero(arr) {
  /**
   * create a start pointer and end pointer
   */
  let front = 0;
  let back = arr.length - 1;

  /**
   * while loop through pointers as long as the back is larger than the front
   * add the two pointers together to see if its zero
   */
  while (front < back) {
    let summed = arr[front] + arr[back];
    if (summed === 0) {
      return [arr[front], arr[back]];
    } else if (summed > 0) {
      /**
       *  if too large move end pointer down
       */
      back--;
    } else if (summed < 0) {
      /**
       *  if too small move first pointer up
       */
      front++;
    }
  }
}
console.log(sumZero([-4, 2, 3, 4]));
