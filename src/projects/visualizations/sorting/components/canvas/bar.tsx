import * as React from 'react'

import {Box, type BoxProps} from '@chakra-ui/react'

import {SortingContext} from '../../context'

type Props = {
  value: number
}

const Bar = ({value, ...rest}: BoxProps & Props) => {
  const {array, isRainbow} = React.useContext(SortingContext)

  const styles: BoxProps = React.useMemo(
    () => ({
      w: `${100 / array.length}%`,
      maxW: 12,
      h: `${(value / Math.max(...array)) * 100}%`,
      bgColor: isRainbow
        ? `hsl(${(value / Math.max(...array)) * 360}, 40%, 50%)`
        : `hsl(190, ${(value / Math.max(...array)) * 50 + 10}%, ${(value / Math.max(...array)) * 50 + 10}%)`,
      transition: 'all 100ms ease',
    }),
    [value, isRainbow, array]
  )

  return <Box {...styles} {...rest} />
}

export default Bar
