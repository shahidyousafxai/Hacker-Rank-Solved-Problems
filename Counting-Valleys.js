function countingValleys(steps, path) {
  // Write your code here
  var level = 0
  var valley = 0
  for (let i = 0; i < steps; i++) {
    if (path[i] == 'U') {
      level += 1
      if (level == 0) {
        valley += 1
      }
    } else {
      level -= 1
    }
  }
  return valley
}
