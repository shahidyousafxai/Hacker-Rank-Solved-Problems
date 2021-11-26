function circularArrayRotation(a, k, queries) {
  // Write your code here
  var newarr = []
  for (let i = 1; i <= k; i++) {
    var remove = a.pop()
    a.unshift(remove)
  }
  for (let j in queries) {
    newarr.push(a[queries[j]])
  }
  return newarr
}
