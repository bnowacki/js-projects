import {Reducer} from 'react'

import {Game, GameState, Mark, PayloadAction, PlayerType, Points} from './types'
import {getPlayer, handleMakeMove} from './utils'

const initialPoints: Points = {
  X: 0,
  O: 0,
  tie: 0,
}

export const initialState: Game = {
  state: GameState.SelectingPlayers,
  board: Array(9).fill(null),
  turn: Mark.X,
  xStarted: true,
  winner: null,
  points: initialPoints,
  xPlayer: null,
  oPlayer: null,
  delay: 500,
}

export const reducer: Reducer<Game, PayloadAction> = (state: Game, action: PayloadAction) => {
  const {type, payload} = action

  switch (type) {
    case 'MOVE':
      if (typeof payload !== 'number') return state

      return handleMakeMove(state, payload)

    case 'SET_PLAYERS':
      return {...state, state: GameState.Playing, xPlayer: payload.xPlayer, oPlayer: payload.oPlayer}

    case 'NEXT_ROUND':
      return {
        ...state,
        board: Array(9).fill(null),
        winner: null,
        state: GameState.Playing,
        turn: state.xStarted ? Mark.O : Mark.X,
        xStarted: !state.xStarted,
      }

    case 'RESTART':
      return {
        ...state,
        board: Array(9).fill(null),
        winner: null,
        state: GameState.Playing,
        turn: state.xStarted ? Mark.O : Mark.X,
        xStarted: !state.xStarted,
        points: initialPoints,
      }

    case 'TOGGLE_PAUSE':
      return {
        ...state,
        state: state.state === GameState.Paused ? GameState.Playing : GameState.Paused,
      }

    case 'CHANGE_PLAYERS':
      return {
        ...state,
        board: Array(9).fill(null),
        winner: null,
        turn: state.xStarted ? Mark.O : Mark.X,
        xStarted: !state.xStarted,
        points: initialPoints,
        xPlayer: null,
        oPlayer: null,
        state: GameState.SelectingPlayers,
      }

    default:
      return state
  }
}

// Actions

export const makeMove = (index: number): PayloadAction => ({
  type: 'MOVE',
  payload: index,
})

export const setPlayers = ({
  xPlayerType,
  oPlayerType,
}: {
  xPlayerType: PlayerType
  oPlayerType: PlayerType
}) => {
  return {
    type: 'SET_PLAYERS',
    payload: {
      xPlayer: getPlayer(xPlayerType, Mark.X),
      oPlayer: getPlayer(oPlayerType, Mark.O),
    },
  }
}
