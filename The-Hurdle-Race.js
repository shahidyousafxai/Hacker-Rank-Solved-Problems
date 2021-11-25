function hurdleRace(k, height) {
  // Write your code here
  var maxi = Math.max(...height)
  if (maxi > k) {
    return maxi - k
  } else {
    return 0
  }
}
