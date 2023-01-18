import {SortingFunction, SortingStepGenerator} from '../types'

function* partition(arr: number[], p: number, q: number): SortingStepGenerator {
  const pivotInd = Math.floor((p + q) / 2)
  const pivot = arr[pivotInd]
  let i = p
  let j = q

  while (i <= j) {
    while (arr[i] < pivot) {
      i++
    }
    while (arr[j] > pivot) {
      j--
    }
    yield [
      {index: p, style: {bg: 'yellow.500'}},
      {index: q, style: {bg: 'yellow.500'}},
      {index: i, style: {bg: '#eee'}},
      {index: j, style: {bg: '#eee'}},
      {index: pivotInd, style: {bg: 'red.300'}},
    ]
    if (i <= j) {
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      i++
      j--
    }
  }
  return i
}

function* quickSort(arr: number[], p: number, q: number): SortingStepGenerator {
  if (arr.length < 2) return

  const pivotInd = Math.floor((p + q) / 2)
  const pivot = arr[pivotInd]
  let i = p
  let j = q

  while (i <= j) {
    while (arr[i] < pivot) {
      i++
    }
    while (arr[j] > pivot) {
      j--
    }
    yield [
      {index: p, style: {bg: 'yellow.500'}},
      {index: q, style: {bg: 'yellow.500'}},
      {index: i, style: {bg: '#eee'}},
      {index: j, style: {bg: '#eee'}},
      {index: pivotInd, style: {bg: 'red.300'}},
    ]
    if (i <= j) {
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      i++
      j--
    }
  }

  if (p < i - 1) {
    yield* quickSort(arr, p, i - 1)
  }
  if (i < q) {
    yield* quickSort(arr, i, q)
  }
}

const QuickSort: SortingFunction = function* (arr) {
  yield* quickSort(arr, 0, arr.length - 1)
}

export default QuickSort
