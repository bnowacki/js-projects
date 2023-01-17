import * as React from 'react'

import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  FormControl,
  FormLabel,
  type SliderProps,
} from '@chakra-ui/react'

type Props = {
  label?: string
}

const Slider = ({label, ...rest}: SliderProps & Props) => {
  return (
    <FormControl>
      {!!label && <FormLabel>{label}</FormLabel>}
      <ChakraSlider aria-label="array-size-slider" {...rest}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </ChakraSlider>
    </FormControl>
  )
}

export default Slider
