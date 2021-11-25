function utopianTree(n) {
  // Write your code here
  var h = 1
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      h *= 2
    } else {
      h += 1
    }
  }
  return h
}
utopianTree(5)
