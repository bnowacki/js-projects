import * as React from 'react'

import {Flex} from '@chakra-ui/react'

import {Context, GameState, Mark} from './types'
import {initialState, makeMove, reducer} from './reducer'
import Board from './components/board'
import PauseModal from './components/pause-modal'
import Scores from './components/scores'
import PickPlayersModal from './components/pick-players-modal'

export const GameContext = React.createContext<Context>({state: initialState, dispatch: () => null})

let timeoutID: ReturnType<typeof setTimeout> | null = null

const TicTacToe = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const {board, delay, turn, oPlayer, xPlayer, state: gameState} = state

  const bothComputerPlayer = React.useMemo(() => !xPlayer?.isHuman && !oPlayer?.isHuman, [oPlayer, xPlayer])

  const computerMakeMove = React.useCallback(async () => {
    const player = turn === Mark.X ? xPlayer : oPlayer
    if (!player || player.isHuman) return

    if (bothComputerPlayer) {
      await new Promise((r) => (timeoutID = setTimeout(r, delay)))
    }

    ;(timeoutID || !bothComputerPlayer) && dispatch(makeMove(player.getMove(board)))
  }, [xPlayer, oPlayer, board, turn, delay, bothComputerPlayer])

  React.useEffect(() => {
    if (!timeoutID || !bothComputerPlayer) return

    clearTimeout(timeoutID)
    timeoutID = null
  }, [gameState, bothComputerPlayer])

  React.useEffect(() => {
    if (gameState !== GameState.Playing) return
    computerMakeMove()
  }, [board, xPlayer, oPlayer, gameState]) // eslint-disable-line

  const context = React.useMemo(() => ({state, dispatch}), [state, dispatch])
  return (
    <GameContext.Provider value={context}>
      <Flex w="100%" gap={4} direction="column" p={4} align="center">
        <PickPlayersModal />
        <Scores />
        <Board />
        <PauseModal />
      </Flex>
    </GameContext.Provider>
  )
}

export default TicTacToe
