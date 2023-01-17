import * as React from 'react'

import {Stack} from '@chakra-ui/react'

import Context from './context'
import Controls from './components/controls'
import Canvas from './components/canvas'

const SortingVisualizer = () => {
  return (
    <Context>
      <Stack w="100%" p={2}>
        <Canvas />
        <Controls />
      </Stack>
    </Context>
  )
}

export default SortingVisualizer
