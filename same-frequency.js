function sameFrequency(a, b) {
  // good luck. Add any arguments you deem necessary.
  a = a.toString();
  b = b.toString();
  const freq = {};

  for (let c of a) {
    // for each character count the freqency
    freq[c] = freq[c] + 1 || 1;
    console.log(freq);
  }
  for (let c of b) {
    if (!freq[c] || freq[c] === 0) {
      return false;
    } else {
      freq[c]--;
    }
    console.log(freq);
  }
  for (k in freq) {
    if (freq[k] != 0) {
      return false;
    }
  }
  console.log(freq);
  return true;
}
console.log(sameFrequency(33333, 3));
