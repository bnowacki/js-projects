import * as React from 'react'

import {HStack, IconButton} from '@chakra-ui/react'
import {MdShuffle as ShuffleIcon, MdOutlineColorLens as ColorIcon} from 'react-icons/md'

import {SortingContext} from '../../context'
import SortButton from './sort-button'
import Slider from './slider'
import AlgoSelect from './algo-select'

const Controls = () => {
  const {array, changeArraySize, shuffleArray, speed, setSpeed, isRainbow, toggleRainbow} =
    React.useContext(SortingContext)

  const handleSizeChange = React.useCallback(
    (val: number) => {
      changeArraySize && changeArraySize(val)
    },
    [changeArraySize]
  )

  return (
    <HStack spacing={4} px={4} py={2} bg="blackAlpha.600" borderRadius="xl">
      <IconButton
        aria-label="change-color-theme"
        icon={<ColorIcon size="75%" />}
        onClick={toggleRainbow}
        colorScheme={isRainbow ? 'pink' : undefined}
      />
      <IconButton aria-label="shuffle-array" icon={<ShuffleIcon size="75%" />} onClick={shuffleArray} />
      <Slider
        label={`Array size ${array.length}`}
        value={array.length}
        onChange={handleSizeChange}
        min={10}
        max={100}
      />
      <Slider label={`Speed ${speed} / s`} value={speed} onChange={setSpeed} min={1} max={60} />
      <AlgoSelect />
      <SortButton />
    </HStack>
  )
}

export default Controls
