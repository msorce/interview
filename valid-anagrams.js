function validAnagram(word1, word2) {
  // check if words are same length
  if (word1.length !== word2.length) {
    return false;
  }
  // create 2 freq counter objects
  const freq1 = {};
  // loop through word1
  for (let char of word1) {
    // add the character freq of word 1
    freq1[char] ? freq1[char]++ : (freq1[char] = 1);
  }
  // loop through word 2
  for (let char of word2) {
    // return false if it doesnt exist in freq1
    if (!freq1[char]) {
      return false;
    }
    freq1[char]--;
  }
  return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("aaa", "aaa"));
