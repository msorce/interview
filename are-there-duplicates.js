function areThereDuplicates() {
  const args = [...arguments];
  const seen = {};
  for (a of args) {
    if (seen.hasOwnProperty(a)) {
      return true;
    } else {
      seen[a] = true;
    }
  }
  return false;
}
areThereDuplicates(1, 2, 3, 4);
