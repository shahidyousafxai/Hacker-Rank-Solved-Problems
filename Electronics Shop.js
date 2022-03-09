function getMoneySpent(keyboards, drives, b) {
  let max = -1
  keyboards.map((k) => {
    drives.map((d) => {
      const currentval = k + d <= b ? k + d : -1
      if (currentval > max) max = currentval
    })
  })
  return max
}
