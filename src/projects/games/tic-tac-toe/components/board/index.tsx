import * as React from 'react'

import {Grid, GridItem, Box} from '@chakra-ui/react'

import './board.css'
import {GameContext} from '../..'
import {Tile} from './tile'
import {GameState} from '../../types'

const Board = () => {
  const {
    state: {board, state},
  } = React.useContext(GameContext)

  return (
    <Grid
      maxW="container.sm"
      w="100%"
      style={{aspectRatio: 1}}
      templateColumns="repeat(3, 1fr)"
      templateRows="repeat(3, 1fr)"
      gap={2}
      position="relative"
    >
      {board.map((v, i) => (
        <GridItem key={i}>
          <Tile value={v} index={i} />
        </GridItem>
      ))}
      {/* Dividers */}
      {state !== GameState.SelectingPlayers && (
        <>
          <Box className="board-divider vertical" />
          <Box className="board-divider vertical" />
          <Box className="board-divider horizontal" />
          <Box className="board-divider horizontal" />
        </>
      )}
    </Grid>
  )
}

export default Board
