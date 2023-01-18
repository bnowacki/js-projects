import {SortingFunction} from '../types'

const ShellSort: SortingFunction = function* (arr) {
  const n = arr.length

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i += 1) {
      const temp = arr[i]

      let j
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap]
      }

      arr[j] = temp
      yield [
        {index: j, style: {bg: '#eee'}},
        {index: j + 1, style: {bg: '#eee'}},
      ]
    }
  }
}

export default ShellSort
