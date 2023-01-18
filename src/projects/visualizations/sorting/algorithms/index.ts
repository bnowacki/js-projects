import {Sort, SortingFunction} from '../types'
import BubbleSort from './bubble-sort'
import QuickSort from './quick-sort'
import MergeSort from './merge-sort'
import SelectionSort from './selection-sort'
import ShellSort from './shell-sort'
import HeapSort from './heap-sort'
import InsertionSort from './insertion-sort'

const sortToAlgorithmMap: Record<Sort, SortingFunction> = {
  [Sort.Bubble]: BubbleSort,
  [Sort.Quick]: QuickSort,
  [Sort.Merge]: MergeSort,
  [Sort.Insertion]: InsertionSort,
  [Sort.Selection]: SelectionSort,
  [Sort.Heap]: HeapSort,
  [Sort.Shell]: ShellSort,
}

export default sortToAlgorithmMap
