import {type BoxProps} from '@chakra-ui/react'

export enum Sort {
  Bubble = 'Bubble sort',
  Merge = 'Merge sort',
  Quick = 'Quick sort',
  Heap = 'Heap sort',
  Selection = 'Selection sort',
  Insertion = 'Insertion sort',
}

export type Status = 'sorting' | 'finished' | 'paused'

export type BarStyle = {index: number; style: BoxProps}

export type SortingStepGenerator = Generator<BarStyle[]>

export type SortingFunction = (arr: number[]) => SortingStepGenerator
