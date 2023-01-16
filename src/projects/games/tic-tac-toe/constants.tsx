import * as React from 'react'

import {Icon, IconProps} from '@chakra-ui/react'
import {MdOutlineClose as Cross, MdOutlineCircle as Circle} from 'react-icons/md'

import {Project} from '@/types'

import thumbnail from './thumbnail.png'
import {Mark, PlayerType} from './types'

export const ticTacToe: Project = {
  name: 'Tic-Tac-Toe',
  path: 'tic-tac-toe',
  description:
    'Tic-tac-toe (American English), noughts and crosses (Commonwealth English), or Xs and Os (Canadian or Irish English) is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.',
  imgPath: thumbnail,
}

export const PlayerTypeLabel: Record<PlayerType, string> = {
  [PlayerType.Human]: 'Human',
  [PlayerType.RandomComputer]: 'Random Computer',
  [PlayerType.GeniusComputer]: 'Genius Computer',
}

export const winningLines = [
  // rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonals
  [0, 4, 8],
  [2, 4, 6],
]

export const MarkIcon = ({mark, ...rest}: IconProps & {mark: Mark | null}) => {
  if (!mark) return null

  return (
    <Icon
      as={mark === Mark.X ? Cross : Circle}
      boxSize={rest.boxSize || '100%'}
      color={rest.color || mark === Mark.X ? 'cyan.600' : 'pink.600'}
      {...rest}
    />
  )
}
