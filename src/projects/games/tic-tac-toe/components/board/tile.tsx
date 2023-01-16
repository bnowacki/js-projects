import * as React from 'react'

import {IconButton} from '@chakra-ui/react'

import {MarkIcon} from '../../constants'
import {Mark} from '../../types'
import {GameContext} from '../..'
import {makeMove} from '../../reducer'

type TileProps = {
  value: Mark | null
  index: number
}

export const Tile = ({value, index}: TileProps) => {
  const {
    state: {turn, xPlayer, oPlayer},
    dispatch,
  } = React.useContext(GameContext)

  const handleClick = React.useCallback(() => {
    dispatch(makeMove(index))
  }, [index, dispatch])

  const isDisabled = React.useMemo(() => {
    const isHumanTurn = (turn === Mark.X && xPlayer?.isHuman) || (turn === Mark.O && oPlayer?.isHuman)
    return !!value || !isHumanTurn
  }, [value, turn, xPlayer, oPlayer])

  return (
    <IconButton
      aria-label="tile"
      w="100%"
      h="100%"
      variant="ghost"
      isDisabled={isDisabled}
      _disabled={{opacity: 1, cursor: 'auto'}}
      onClick={handleClick}
      p={6}
      role="group"
      _hover={{}}
      icon={
        <MarkIcon
          mark={value || turn}
          opacity={value ? 1 : 0}
          _groupHover={{opacity: value ? 1 : isDisabled ? 0 : 0.3}}
          transition="all 250ms ease"
        />
      }
    />
  )
}
