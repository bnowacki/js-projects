import * as React from 'react'

import {Route, Routes} from 'react-router-dom'

import Layout from '@/common/layout'
import Home from '@/home'
import TicTacToe from '@/projects/games/tic-tac-toe'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<Home />} />
        <Route path="tic-tac-toe" element={<TicTacToe />} />
      </Route>
    </Routes>
  )
}

export default Router
