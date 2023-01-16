import {BoardType, Mark, PlayerType} from './types'
import {getAvailableMoves, getWinner} from './utils'

export class Player {
  mark: Mark
  type: PlayerType
  isHuman: boolean

  constructor(mark: Mark, type: PlayerType) {
    this.mark = mark
    this.isHuman = type === PlayerType.Human
    this.type = type
  }

  getMove(board: BoardType): number {
    return 0
  }
}

export class HumanPlayer extends Player {
  constructor(mark: Mark) {
    super(mark, PlayerType.Human)
  }
}

export class RandomComputerPlayer extends Player {
  constructor(mark: Mark) {
    super(mark, PlayerType.RandomComputer)
  }

  getMove(board: BoardType): number {
    const availableMoves = getAvailableMoves(board)

    // return a random move
    return availableMoves[Math.floor(Math.random() * availableMoves.length)]
  }
}

export class GeniusComputerPlayer extends Player {
  constructor(mark: Mark) {
    super(mark, PlayerType.GeniusComputer)
  }

  getMove(board: BoardType): number {
    const availableMoves = getAvailableMoves(board)

    // if board is empty return a random move
    const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)]
    if (availableMoves.length === 9) return randomMove

    const {position} = this.minimax(board, this.mark)

    return position ?? randomMove
  }

  minimax(board: BoardType, player: Mark): {score: number; position?: number} {
    const maximizing = player === this.mark
    const availableMoves = getAvailableMoves(board)

    const winner = getWinner(board)
    if (winner) {
      if (winner === 'tie')
        return {
          score: 0,
        }

      return {
        score: (availableMoves.length + 1) * (winner === this.mark ? 1 : -1),
      }
    }

    let best: {score: number; position?: number} = {
      score: maximizing ? -Infinity : Infinity,
    }

    for (const m of availableMoves) {
      board[m] = player
      const simScore = this.minimax(board, player === Mark.X ? Mark.O : Mark.X)
      board[m] = null
      if (maximizing && simScore.score > best.score) best = {...simScore, position: m}
      else if (!maximizing && simScore.score < best.score) best = {...simScore, position: m}
    }

    return best
  }
}
