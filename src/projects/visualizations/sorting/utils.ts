export const shuffleArray = (arr: number[]) => {
  let currentIndex = arr.length
  let temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = arr[currentIndex]
    arr[currentIndex] = arr[randomIndex]
    arr[randomIndex] = temporaryValue
  }

  return arr
}
