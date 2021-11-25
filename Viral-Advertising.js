function viralAdvertising(n) {
  // Write your code here
  var num = 5
  var count = 0
  for (let i = 1; i <= n; i++) {
    var like = Math.floor(num / 2)
    count = count + like
    num = like * 3
  }
  return count
}
viralAdvertising(5)
