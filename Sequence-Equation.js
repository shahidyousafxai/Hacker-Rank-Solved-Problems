function permutationEquation(p) {
  // Write your code here
  var arr = []
  for (let x = 1; x <= p.length; x++) {
    for (let j = 0; j < p.length; j++) {
      if (p[j] === x) {
        for (let k = 0; k < p.length; k++) {
          if (j + 1 === p[k]) {
            arr.push(k + 1)
          }
        }
      }
    }
  }
  return arr
}
