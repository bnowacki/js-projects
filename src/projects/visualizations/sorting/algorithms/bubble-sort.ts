import {SortingFunction} from '../types'

const BubbleSort: SortingFunction = function* (arr) {
  const n = arr.length

  for (let i = 0; i < n - 1; i++) {
    let swapped = false

    for (let j = 0; j < n - i - 1; j++) {
      yield [
        {index: j, style: {bg: '#eee'}},
        {index: j + 1, style: {bg: '#eee'}},
      ]

      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
        swapped = true
      }
    }

    if (!swapped) break
  }
}

export default BubbleSort
