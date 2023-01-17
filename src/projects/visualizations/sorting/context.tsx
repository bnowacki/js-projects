import * as React from 'react'

import {useDisclosure} from '@chakra-ui/react'

import {shuffleArray} from './utils'

type State = {
  array: number[]
  changeArraySize?: (size: number) => void
  shuffleArray?: () => void

  speed: number
  setSpeed: React.Dispatch<React.SetStateAction<number>>

  sorting: boolean

  isRainbow: boolean
  toggleRainbow?: () => void
}

const initialState = {
  array: shuffleArray([...Array.from({length: 50}, (_, i) => i + 1)]),
  speed: 10,
  sorting: false,
  setSpeed: () => {},
  isRainbow: false,
}

export const SortingContext = React.createContext<State>(initialState)

const Context = ({children}: {children: React.ReactNode}) => {
  const [array, setArray] = React.useState(initialState.array)
  const [speed, setSpeed] = React.useState(initialState.speed)
  const [sorting, setSorting] = React.useState(initialState.sorting)
  const {isOpen: isRainbow, onToggle: toggleRainbow} = useDisclosure()

  const changeArraySize = React.useCallback((length: number) => {
    setArray(shuffleArray([...Array.from({length}, (_, i) => i + 1)]))
  }, [])

  const handleShuffleArray = React.useCallback(() => {
    setArray(shuffleArray([...array]))
  }, [array])

  const context = React.useMemo(
    () => ({
      array,
      changeArraySize,
      shuffleArray: handleShuffleArray,
      speed,
      setSpeed,
      sorting,
      isRainbow,
      toggleRainbow,
    }),
    [array, changeArraySize, handleShuffleArray, speed, setSpeed, sorting, isRainbow, toggleRainbow]
  )

  return <SortingContext.Provider value={context}>{children}</SortingContext.Provider>
}

export default Context
