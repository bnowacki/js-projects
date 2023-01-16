import * as React from 'react'

import {HStack, Text, Stack, Heading, Center} from '@chakra-ui/react'

import {GameContext} from '..'
import {MarkIcon, PlayerTypeLabel} from '../constants'
import {GameState, Mark} from '../types'

const Scores = () => {
  const {
    state: {turn, points, xPlayer, oPlayer, state},
  } = React.useContext(GameContext)

  return (
    <HStack
      spacing={6}
      maxW="container.sm"
      w="100%"
      align="flex-end"
      justify="center"
      opacity={state === GameState.SelectingPlayers ? 0 : 1}
      transition="all 1s ease"
    >
      <Stack flex="1" align="center">
        <Heading size="md">{xPlayer ? PlayerTypeLabel[xPlayer?.type] : 'X Player'}</Heading>
        <HStack
          p={2}
          bg="blackAlpha.600"
          borderRadius="lg"
          align="center"
          justify="space-between"
          boxShadow={turn === Mark.X ? '0px 0px 4px 1px #48BB78' : 'none'}
          w="100%"
        >
          <MarkIcon mark={Mark.X} boxSize={12} />
          <Text fontSize="48px" lineHeight="48px">
            {points.X}
          </Text>
        </HStack>
      </Stack>
      <Stack flex="1" align="center">
        <Heading size="md">Ties</Heading>
        <Center p={2} bg="blackAlpha.600" borderRadius="lg" w="100%">
          <Text fontSize="48px" lineHeight="48px">
            {points.tie}
          </Text>
        </Center>
      </Stack>
      <Stack flex="1" align="center">
        <Heading size="md">{oPlayer ? PlayerTypeLabel[oPlayer?.type] : 'O Player'}</Heading>
        <HStack
          p={2}
          bg="blackAlpha.600"
          borderRadius="lg"
          align="center"
          justify="space-between"
          boxShadow={turn === Mark.O ? '0px 0px 4px 1px #48BB78' : 'none'}
          w="100%"
        >
          <MarkIcon mark={Mark.O} boxSize={12} />
          <Text fontSize="48px" lineHeight="48px">
            {points.O}
          </Text>
        </HStack>
      </Stack>
    </HStack>
  )
}

export default Scores
