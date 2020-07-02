/*
 * findLongestSubstring
 * accepts a string and returns length of the longest
 * substring with all distinct characters
 * */
// function findLongestSubstring(str) {
//   // to keep track of the longest unique substring
//   let longest = 0;

//   // to keep track of values that we have already  seen
//   let seen = {};

//   // starting pointer, move this and scan for unique
//   let start = 0;

//   // loop through string, starting from 0 to the end
//   for (let i = 0; i < str.length; i++) {
//     // get the current character
//     let char = str[i];

//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }

//     // index = beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);

//     // store index of the next character as to not double count
//     seen[char] = i + 1;
//   }

//   // return the longest length
//   console.log(longest);
//   return longest;
// }
// function findLongestSubstring(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     let set = new Set();
//     for (let j = i + 1; j < str.length; j++) {
//       console.log("loop");
//       if (set.has(char)) {
//         break;
//       } else {
//         set.add(char);
//       }
//       count = Math.max(count, set.size);
//     }
//   }
//   console.log(count);
//   return count;
// }
functrion findLongestSubstring(s){
  let count = 0;
  let i = 0;
  let j = 0;
  let n = s.length;
  let set = new Set();
  while (i <  n && j < n) {
    let char = charAt(j)
    if (!set.has(char)) {
      set.add(char);
      j++;
      count = Math.max(count, j-i);
    } else {
      set.delete(charAt(i));
      i++;
    }
  }
  return count;
}
findLongestSubstring("aabcdefg");
