import * as React from 'react'

import {Button, Center, Flex, Heading, Select, Stack} from '@chakra-ui/react'

import {GameContext} from '..'
import {MarkIcon, PlayerTypeLabel} from '../constants'
import {GameState, Mark, PlayerType} from '../types'
import {setPlayers} from '../reducer'

const PlayerSelect = ({
  mark,
  value,
  onChange,
}: {
  mark: Mark
  value: PlayerType
  onChange: (mark: Mark, type: PlayerType) => void
}) => {
  const handleChange = React.useCallback(
    ({target: {value}}: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(mark, value as PlayerType)
    },
    [onChange, mark]
  )

  return (
    <Stack align="center">
      <MarkIcon mark={mark} boxSize={32} />
      <Select value={value} onChange={handleChange}>
        {Object.entries(PlayerType).map(([key, value]) => (
          <option key={key} value={value}>
            {PlayerTypeLabel[value]}
          </option>
        ))}
      </Select>
    </Stack>
  )
}

const PickPlayersModal = () => {
  const {
    dispatch,
    state: {state},
  } = React.useContext(GameContext)
  const [xPlayerType, setXPlayerType] = React.useState<PlayerType>(PlayerType.Human)
  const [oPlayerType, setOPlayerType] = React.useState<PlayerType>(PlayerType.Human)

  const handleSubmit = React.useCallback(() => {
    dispatch(setPlayers({xPlayerType, oPlayerType}))
  }, [dispatch, xPlayerType, oPlayerType])

  const handlePlayerChange = React.useCallback((mark: Mark, type: PlayerType) => {
    mark === Mark.X ? setXPlayerType(type) : setOPlayerType(type)
  }, [])

  return state === GameState.SelectingPlayers ? (
    <Center position="absolute" h="100%" w="100%" top={0} bg="blackAlpha.800" zIndex="modal">
      <Stack spacing={4} bg="gray.900" p={4} borderRadius="lg" boxShadow="lg" align="center">
        <Flex align="center" justify="center">
          <PlayerSelect mark={Mark.X} value={xPlayerType} onChange={handlePlayerChange} />
          <Heading>vs</Heading>
          <PlayerSelect mark={Mark.O} value={oPlayerType} onChange={handlePlayerChange} />
        </Flex>
        <Button w="100%" onClick={handleSubmit}>
          Play!
        </Button>
      </Stack>
    </Center>
  ) : null
}

export default PickPlayersModal
