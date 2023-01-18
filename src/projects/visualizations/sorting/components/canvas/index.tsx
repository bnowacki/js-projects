import * as React from 'react'

import {Flex} from '@chakra-ui/react'

import {SortingContext} from '../../context'
import Bar from './bar'

const Canvas = () => {
  const {array, highlighted} = React.useContext(SortingContext)

  const gap = React.useMemo(() => (array.length < 60 ? (array.length < 30 ? 2 : 1) : 0), [array])

  return (
    <Flex p={2} pb={0} flex="1" align="flex-end" justify="center" gap={gap}>
      {array.map((v, i) => (
        <Bar key={i} value={v} {...highlighted.find((h) => h.index === i)?.style} />
      ))}
    </Flex>
  )
}

export default Canvas
