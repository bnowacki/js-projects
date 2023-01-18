import * as React from 'react'

import {Button, Flex, HStack, IconButton, Select, Stack, Tooltip} from '@chakra-ui/react'
import {MdShuffle as ShuffleIcon, MdOutlineColorLens as ColorIcon} from 'react-icons/md'
import {
  FaPlay as PlayIcon,
  FaPause as PauseIcon,
  FaBackward as PrevIcon,
  FaForward as NextIcon,
} from 'react-icons/fa'

import {SortingContext} from '../../context'
import Slider from './slider'
import {Sort} from '../../types'

const Controls = () => {
  const {
    array,
    status,
    onStatusChange,
    changeArraySize,
    shuffleArray,
    speed,
    setSpeed,
    pickedSort,
    onSortChange,
    isRainbow,
    toggleRainbow,
  } = React.useContext(SortingContext)
  const isSorting = React.useMemo(() => status === 'sorting', [status])

  const handleSizeChange = React.useCallback(
    (val: number) => {
      changeArraySize && changeArraySize(val)
    },
    [changeArraySize]
  )

  const handleStatusChange = React.useCallback(() => {
    onStatusChange(isSorting ? 'paused' : 'sorting')
  }, [isSorting, onStatusChange])

  const handleSortChange = React.useCallback(
    ({target: {value}}: React.ChangeEvent<HTMLSelectElement>) => {
      onSortChange && onSortChange(value as Sort)
    },
    [onSortChange]
  )

  return (
    <Flex
      gap={4}
      px={4}
      py={2}
      bg="#060606"
      borderRadius="xl"
      position="relative"
      justify="center"
      align="center"
    >
      <Flex align="flex-end" flex="1">
        {/* Sort select */}
        <Select value={pickedSort} onChange={handleSortChange} isDisabled={isSorting}>
          {Object.entries(Sort).map(([key, value]) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </Select>
      </Flex>
      {/* Color toggle */}
      <IconButton
        aria-label="change-color-theme"
        icon={<ColorIcon size="75%" />}
        onClick={toggleRainbow}
        colorScheme={isRainbow ? 'pink' : undefined}
      />
      <Flex align="center" gap={1}>
        {/* Play button */}
        <IconButton
          aria-label="shuffle-array"
          p={2}
          size="md"
          onClick={handleStatusChange}
          borderRadius="full"
          icon={<PrevIcon size="75%" />}
        />
        <IconButton
          aria-label="shuffle-array"
          p={2}
          size="lg"
          onClick={handleStatusChange}
          borderRadius="full"
          icon={isSorting ? <PauseIcon size="75%" /> : <PlayIcon size="75%" />}
        />
        <IconButton
          aria-label="shuffle-array"
          p={2}
          size="md"
          onClick={handleStatusChange}
          borderRadius="full"
          icon={<NextIcon size="75%" />}
        />
      </Flex>

      {/* Shuffle */}
      <Tooltip label="Shuffle">
        <IconButton
          aria-label="shuffle-array"
          icon={<ShuffleIcon size="75%" />}
          onClick={shuffleArray}
          isDisabled={isSorting}
        />
      </Tooltip>
      <Flex gap={4} flex="1">
        {/* Speed */}
        <Slider label={`Speed ${speed} / s`} value={speed} onChange={setSpeed} min={1} max={120} />
        {/* Array size */}
        <Slider
          label={`Array size ${array.length}`}
          value={array.length}
          onChange={handleSizeChange}
          min={10}
          max={250}
          isDisabled={isSorting}
        />
      </Flex>
    </Flex>
  )
}

export default Controls
