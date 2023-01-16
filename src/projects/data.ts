import {Project} from '@/types'

import {ticTacToe} from './games/tic-tac-toe/constants'

const projects: Project[] = [
  {
    ...ticTacToe,
  },
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
    name: 'Sorting Visualizer',
    path: 'sorting-visualizer',
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
