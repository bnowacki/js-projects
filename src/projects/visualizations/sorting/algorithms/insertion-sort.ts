import {SortingFunction} from '../types'

const InsertionSort: SortingFunction = function* (arr) {
  const n = arr.length

  for (let i = 1; i < n; i++) {
    let j = i

    while (j > 0 && arr[j - 1] > arr[j]) {
      yield [
        {index: j, style: {bg: '#eee'}},
        {index: j - 1, style: {bg: '#eee'}},
      ]

      const tmp = arr[j]
      arr[j] = arr[j - 1]
      arr[j - 1] = tmp
      j--
    }
  }
}

export default InsertionSort
