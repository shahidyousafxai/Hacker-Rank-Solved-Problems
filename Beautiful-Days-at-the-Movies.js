function beautifulDays(i, j, k) {
  // Write your code here
  var count = 0
  for (let days = i; days <= j; days++) {
    const revNum =
      parseFloat(days.toString().split('').reverse().join('')) * Math.sign(days)
    const diff = Math.abs(days - revNum)
    if (diff % k === 0) {
      count += 1
    }
  }
  return count
}
beautifulDays(20, 23, 6)
