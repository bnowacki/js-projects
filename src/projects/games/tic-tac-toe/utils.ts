import {winningLines} from './constants'
import {GeniusComputerPlayer, HumanPlayer, RandomComputerPlayer} from './player'
import {BoardType, Game, GameState, Mark, PlayerType} from './types'

export const getPlayer = (type: PlayerType, mark: Mark) => {
  switch (type) {
    case PlayerType.Human:
      return new HumanPlayer(mark)
    case PlayerType.RandomComputer:
      return new RandomComputerPlayer(mark)
    case PlayerType.GeniusComputer:
      return new GeniusComputerPlayer(mark)
    default:
      return null
  }
}

export const getAvailableMoves = (board: BoardType) => {
  const availableMoves: number[] = []
  board.forEach((v, i) => !v && availableMoves.push(i))

  return availableMoves
}

export const getWinner = (board: BoardType) => {
  for (const l of winningLines) {
    const [a, b, c] = l
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a]
  }
  if (board.every((v) => !!v)) return 'tie'
  return null
}

export const handleMakeMove = (state: Game, tile: number): Game => {
  const board = state.board.map((p, i) => (tile === i ? state.turn : p))

  const winner = getWinner(board)
  const points = {...state.points}
  let gameState = state.state
  if (winner) {
    ++points[winner]
    gameState = GameState.Over
  }

  const turn = state.turn === Mark.O ? Mark.X : Mark.O

  return {...state, board, points, turn, winner, state: gameState}
}
