function angryProfessor(k, a) {
  // Write your code here
  var count = 0
  for (let i in a) {
    if (a[i] <= 0) {
      count += 1
    }
  }
  if (count >= k) {
    return 'NO'
  } else {
    return 'YES'
  }
}
angryProfessor(3, [-2, -1, 0, 1, 2])
