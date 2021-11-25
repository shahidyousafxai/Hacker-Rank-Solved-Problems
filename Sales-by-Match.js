function sockMerchant(n, ar) {
  // Write your code here
  var count = 0
  ar.sort()
  //    ar.push("#");
  var i = 0
  while (i < n) {
    if (ar[i] == ar[i + 1]) {
      count = count + 1
      i += 2
    } else {
      i += 1
    }
  }
  return count
}
