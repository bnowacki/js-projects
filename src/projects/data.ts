import {Project} from '@/types'

import {ticTacToe} from './games/tic-tac-toe/constants'
import {sortingVisualizer} from './visualizations/sorting/constants'

const projects: Project[] = [
  ticTacToe,
  sortingVisualizer,
  {
    name: 'Chess',
    path: 'chess',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolore eius necessitatibus non repellendus fugit soluta animi eaque natus impedit?',
  },
  {
    name: 'Snake',
    path: 'sname',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolore eius necessitatibus non repellendus fugit soluta animi eaque natus impedit?',
  },
  {
    name: 'Path finding visualizer',
    path: 'path-finding',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolore eius necessitatibus non repellendus fugit soluta animi eaque natus impedit?',
  },
]

export default projects
