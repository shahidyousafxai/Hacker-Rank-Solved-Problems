function saveThePrisoner(n, m, s) {
  // Write your code here
  var num = m % n
  var diff = s - 1
  var prisoner = num + diff
  if (prisoner === 0) {
    return n
  } else if (prisoner <= n) {
    return prisoner
  } else {
    return prisoner - n
  }
}
