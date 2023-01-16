import {Player} from './player'

export enum PlayerType {
  Human = 'human',
  RandomComputer = 'randomComputer',
  GeniusComputer = 'geniusComputer',
}

export enum Mark {
  X = 'X',
  O = 'O',
}

export enum GameState {
  Playing = 'playing',
  Paused = 'paused',
  Over = 'over',
  SelectingPlayers = 'selectingPlayers',
}

export type BoardType = (Mark | null)[]

export type Points = {
  X: number
  O: number
  tie: number
}

export type Game = {
  state: GameState
  board: BoardType
  turn: Mark
  xStarted: boolean
  winner: Mark | 'tie' | null
  points: Points
  xPlayer: Player | null
  oPlayer: Player | null
  delay: number
}

export type PayloadAction = {
  type: string
  payload?: any
}

export type Context = {
  state: Game
  dispatch: React.Dispatch<PayloadAction>
}
