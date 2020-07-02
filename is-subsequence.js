// 'hello' 'hello world' true
// 'hi' 'bye' false
// use the multiple pointer technique

function isSubsequence(a, b) {
  let i = 0;
  let j = 0;

  while (j < b.length) {
    if (b[j] === a[i]) {
      i++;
    }
    if (i === a.length) {
      return true;
    }
    j++;
  }
  return false;
}
console.log(isSubsequence("helo", " a hello world"));
