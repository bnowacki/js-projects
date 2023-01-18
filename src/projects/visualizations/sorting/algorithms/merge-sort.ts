import {SortingFunction, SortingStepGenerator} from '../types'

function* mergeArray(arr: number[], start: number, mid: number, end: number): SortingStepGenerator {
  let start2 = mid + 1

  if (arr[mid] <= arr[start2]) {
    return
  }

  while (start <= mid && start2 <= end) {
    if (arr[start] <= arr[start2]) {
      start++
    } else {
      const value = arr[start2]
      let index = start2

      while (index !== start) {
        arr[index] = arr[index - 1]
        index--
      }
      arr[start] = value

      start++
      mid++
      start2++
      yield [
        {index: start, style: {bg: '#eee'}},
        {index: mid, style: {bg: '#eee'}},
      ]
    }
  }
}

function* sort(arr: number[], p: number, q: number): SortingStepGenerator {
  if (p < q) {
    const m = Math.floor(p + (q - p) / 2)

    yield* sort(arr, p, m)
    yield* sort(arr, m + 1, q)

    yield* mergeArray(arr, p, m, q)
  }
}

const MergeSort: SortingFunction = function* (arr) {
  yield* sort(arr, 0, arr.length - 1)
}

export default MergeSort
