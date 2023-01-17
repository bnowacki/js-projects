import * as React from 'react'

import {Navigate, Route, Routes} from 'react-router-dom'

import Layout from '@/common/layout'
import ProjectLayout from '@/projects/layout'
import Home from '@/home'
import TicTacToe from '@/projects/games/tic-tac-toe'
import SortingVisualizer from '@/projects/visualizations/sorting'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<Home />} />
        <Route path="project" element={<ProjectLayout />}>
          <Route path="tic-tac-toe" element={<TicTacToe />} />
          <Route path="sorting-visualizer" element={<SortingVisualizer />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to={{pathname: '/'}} />} />
    </Routes>
  )
}

export default Router
