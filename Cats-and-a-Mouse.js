function catAndMouse(x, y, z) {
  var catA = Math.abs(z - x)
  var catB = Math.abs(z - y)
  // console.log(catA,catB)
  if (catA < catB) {
    return 'Cat A'
  } else if (catB < catA) {
    return 'Cat B'
  } else {
    return 'Mouse C'
  }
}
catAndMouse(2, 7, 5)
