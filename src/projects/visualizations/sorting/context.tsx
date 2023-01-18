import * as React from 'react'

import {useDisclosure} from '@chakra-ui/react'

import useInterval from '@/common/hooks/use-interval'

import {shuffleArray} from './utils'
import {Sort, SortingStepGenerator, BarStyle, Status} from './types'
import sortToAlgorithmMap from './algorithms'
// @ts-ignore
import noteSound from './note.mp3'

type State = {
  array: number[]
  highlighted: BarStyle[]
  changeArraySize?: (size: number) => void
  shuffleArray?: () => void

  nextSortingStep?: () => void

  pickedSort: Sort
  onSortChange?: (sort: Sort) => void

  speed: number
  setSpeed: React.Dispatch<React.SetStateAction<number>>

  status: Status
  onStatusChange: (s: Status) => void

  isRainbow: boolean
  toggleRainbow?: () => void
}

const initialState: State = {
  array: shuffleArray([...Array.from({length: 100}, (_, i) => i + 1)]),
  highlighted: [],
  speed: 30,
  status: 'finished',
  onStatusChange: () => {},
  pickedSort: Sort.Quick,
  setSpeed: () => {},
  isRainbow: false,
}

export const SortingContext = React.createContext<State>(initialState)

const Context = ({children}: {children: React.ReactNode}) => {
  const {isOpen: isRainbow, onToggle: toggleRainbow} = useDisclosure()

  const [status, setStatus] = React.useState(initialState.status)
  const prevState = React.useRef(initialState.status)
  const onStatusChange = React.useCallback((s: Status) => {
    setStatus(s)
    if (s === 'finished') {
      setHighlighted([])
    }
  }, [])

  const [array, setArray] = React.useState(initialState.array)
  const [highlighted, setHighlighted] = React.useState(initialState.highlighted)

  const [speed, setSpeed] = React.useState(initialState.speed)
  const delay = React.useMemo(() => (status === 'sorting' ? 1000 / speed : null), [status, speed])

  const [sortingSteps, setSortingSteps] = React.useState<SortingStepGenerator | null>(
    sortToAlgorithmMap[initialState.pickedSort](array)
  )
  const [pickedSort, setPickedSort] = React.useState(initialState.pickedSort)

  const onSortChange = React.useCallback(
    (sort: Sort) => {
      onStatusChange('finished')
      setPickedSort(sort)
    },
    [onStatusChange]
  )

  React.useEffect(() => {
    if (prevState.current === 'finished') {
      setSortingSteps(sortToAlgorithmMap[pickedSort](array))
    }
    prevState.current = status
  }, [array, status]) // eslint-disable-line

  const changeArraySize = React.useCallback(
    (length: number) => {
      onStatusChange('finished')
      setArray(shuffleArray([...Array.from({length}, (_, i) => i + 1)]))
    },
    [onStatusChange]
  )

  const handleShuffleArray = React.useCallback(() => {
    onStatusChange('finished')
    setArray((prev) => shuffleArray([...prev]))
  }, [onStatusChange])

  React.useEffect(() => {
    handleShuffleArray()
  }, [handleShuffleArray])

  const nextSortingStep = React.useCallback(() => {
    if (!sortingSteps) return

    const next = sortingSteps.next()

    if (next.done) return onStatusChange('finished')

    setHighlighted(next.value)
  }, [sortingSteps, onStatusChange])

  useInterval(() => {
    nextSortingStep()
  }, delay)

  return (
    <SortingContext.Provider
      value={{
        array,
        changeArraySize,
        shuffleArray: handleShuffleArray,
        highlighted,
        pickedSort,
        onSortChange,
        nextSortingStep,
        speed,
        setSpeed,
        status,
        onStatusChange,
        isRainbow,
        toggleRainbow,
      }}
    >
      {children}
    </SortingContext.Provider>
  )
}

export default Context
