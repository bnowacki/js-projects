import {SortingFunction} from '../types'

const SelectionSort: SortingFunction = function* (arr) {
  const n = arr.length

  for (let i = 0; i < n; i++) {
    let min = i
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }

      yield [
        {index: i, style: {bg: '#eee'}},
        {index: j, style: {bg: '#eee'}},
      ]
    }

    if (min !== i) {
      const tmp = arr[i]
      arr[i] = arr[min]
      arr[min] = tmp
    }
  }
}

export default SelectionSort
