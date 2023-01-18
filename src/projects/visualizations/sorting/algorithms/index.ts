import {Sort, SortingFunction} from '../types'
import BubbleSort from './bubble-sort'
import QuickSort from './quick-sort'

const sortToAlgorithmMap: Record<Sort, SortingFunction> = {
  [Sort.Bubble]: BubbleSort,
  [Sort.Quick]: QuickSort,
  [Sort.Merge]: BubbleSort,
  [Sort.Insertion]: BubbleSort,
  [Sort.Selection]: BubbleSort,
  [Sort.Heap]: BubbleSort,
}

export default sortToAlgorithmMap
