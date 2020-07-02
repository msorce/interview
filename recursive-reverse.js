function reverse(wrd) {
  if (wrd.length === 1) {
    return wrd;
  }
  return wrd[wrd.length - 1] + reverse(wrd.substring(0, wrd.length - 1));
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
