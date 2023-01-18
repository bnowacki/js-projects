import {SortingFunction, SortingStepGenerator} from '../types'

function* maxHeapify(arr: number[], i: number, n: number): SortingStepGenerator {
  const left = 2 * i
  const right = 2 * i + 1
  let maximum
  if (right < n) {
    if (arr[left] >= arr[right]) {
      maximum = left
    } else {
      maximum = right
    }
  } else if (left < n) {
    maximum = left
  } else return
  if (arr[i] < arr[maximum]) {
    const temp = arr[i]
    arr[i] = arr[maximum]
    arr[maximum] = temp
    yield [
      {index: i, style: {bg: '#eee'}},
      {index: maximum, style: {bg: '#eee'}},
    ]
    yield* maxHeapify(arr, maximum, n)
  }
}

const HeapSort: SortingFunction = function* (arr) {
  const n = arr.length
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    yield* maxHeapify(arr, i, n)
  }
  for (let i = n - 1; i >= 0; i--) {
    const temp = arr[0]
    arr[0] = arr[i]
    arr[i] = temp
    yield [{index: i, style: {bg: '#eee'}}]
    yield* maxHeapify(arr, 0, i)
  }
}

export default HeapSort
