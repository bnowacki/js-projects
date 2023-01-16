import * as React from 'react'

import {Button, Center, Flex, Heading, IconButton, Stack, Text} from '@chakra-ui/react'
import {MdPause as PauseIcon} from 'react-icons/md'

import {GameContext} from '..'
import {MarkIcon} from '../constants'
import {GameState} from '../types'

const NEXT_ROUND_TIMEOUT = 5000

const GameOverModal = () => {
  const {
    dispatch,
    state: {winner, state},
  } = React.useContext(GameContext)
  const [timeoutID, setTimeoutID] = React.useState<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    if (timeoutID) {
      clearTimeout(timeoutID)
      setTimeoutID(null)
    }
    if (state !== GameState.Over) return

    const newTimeoutID = setTimeout(() => {
      handleNextRound()
    }, NEXT_ROUND_TIMEOUT)
    setTimeoutID(newTimeoutID)
  }, [state]) // eslint-disable-line

  const handleNextRound = React.useCallback(() => {
    dispatch({type: 'NEXT_ROUND'})
  }, [dispatch])

  const handleRestart = React.useCallback(() => {
    dispatch({type: 'RESTART'})
  }, [dispatch])

  const handleChangePlayers = React.useCallback(() => {
    dispatch({type: 'CHANGE_PLAYERS'})
  }, [dispatch])

  const handleTogglePause = React.useCallback(() => {
    dispatch({type: 'TOGGLE_PAUSE'})
  }, [dispatch])

  return state === GameState.Over || state === GameState.Paused ? (
    <Center position="absolute" h="100%" w="100%" top={0} bg="blackAlpha.600" zIndex="modal">
      <Stack spacing={4} bg="gray.900" minW={64} p={4} borderRadius="lg" boxShadow="lg" align="center">
        <Flex direction="column" align="center">
          {state === GameState.Over ? (
            winner === 'tie' ? (
              <Heading size="2xl">It&apos;s a tie!</Heading>
            ) : (
              <>
                <MarkIcon mark={winner} boxSize={36} />
                <Heading size="2xl">wins!</Heading>
              </>
            )
          ) : (
            <Heading size="2xl">Pause</Heading>
          )}
        </Flex>
        <Stack w="100%">
          {state === GameState.Over && (
            <Button
              onClick={handleNextRound}
              position="relative"
              overflow="hidden"
              _after={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                w: timeoutID ? '100%' : '0%',
                h: '100%',
                bg: 'green.500',
                transition: `width ${NEXT_ROUND_TIMEOUT}ms linear`,
              }}
            >
              <Text zIndex={1}>Next round</Text>
            </Button>
          )}
          {state === GameState.Paused && <Button onClick={handleTogglePause}>Continue</Button>}
          <Button onClick={handleRestart}>Restart</Button>
          <Button onClick={handleChangePlayers}>Change players</Button>
        </Stack>
      </Stack>
    </Center>
  ) : state === GameState.Playing ? (
    <IconButton
      aria-label="pause"
      position="absolute"
      top={4}
      right={4}
      icon={<PauseIcon size="75%" />}
      onClick={handleTogglePause}
    />
  ) : null
}

export default GameOverModal
